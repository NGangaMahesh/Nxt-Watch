import {Component} from 'react'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Nav from '../Nav'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SavedVideosContext from '../../Context/SavedVideosContext'

import {
  FullVideoContainer,
  FullVideoMainContainer,
  LoaderContainer,
  FailureContainer,
  FailHeading,
  FailSubText,
  FailBtn,
  FailureImage,
  VideoDetailContainer,
  PlayerContainer,
  VideoTextContainer,
  VideoTitle,
  LikesAndViewsContainer,
  ViewsAndPostedContainer,
  ViewsText,
  Button,
  ChannelDetails,
  ChannelLogo,
  ChannelDetailsText,
  ChannelDetailsText2,
  VideoDescriptionText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryData = () => {
    this.getVideoDetails()
  }

  onProgress = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  updateLikeState = () => {
    this.setState(prev => ({like: !prev.like, dislike: false}))
  }

  updateDislikeState = () => {
    this.setState(prev => ({dislike: !prev.dislike, like: false}))
  }

  onSuccess = () => {
    const {videoDetails, like, dislike} = this.state

    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value
          const theme = isLight ? 'dark' : 'light'

          const likeIsActive = like ? 'active' : 'not-active'
          const dislikeIsActive = dislike ? 'active' : 'not-active'
          return (
            <VideoDetailContainer>
              <PlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </PlayerContainer>
              <VideoTextContainer>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <LikesAndViewsContainer>
                  <ViewsAndPostedContainer>
                    <ViewsText>{viewCount} views</ViewsText>
                    <ViewsText>{postedAt} ago</ViewsText>
                  </ViewsAndPostedContainer>
                  <div>
                    <Button
                      type="button"
                      theme={likeIsActive}
                      onClick={this.updateLikeState}
                    >
                      <BiLike size={20} style={{paddingTop: '6px'}} />
                      Like
                    </Button>
                    <Button
                      type="button"
                      theme={dislikeIsActive}
                      onClick={this.updateDislikeState}
                    >
                      <BiDislike size={20} style={{paddingTop: '6px'}} />
                      Dislike
                    </Button>
                    <SavedVideosContext.Consumer>
                      {val => {
                        const {updateSave, savedVideosList} = val

                        const present = savedVideosList.find(
                          each => each.id === id,
                        )
                        const saveIsActive =
                          present !== undefined ? 'active' : 'not-active'
                        const saveText =
                          present !== undefined ? 'Saved' : 'Save'
                        return (
                          <Button
                            type="button"
                            theme={saveIsActive}
                            onClick={() => updateSave(videoDetails)}
                          >
                            <RiMenuAddLine
                              size={20}
                              style={{paddingTop: '6px'}}
                            />
                            {saveText}
                          </Button>
                        )
                      }}
                    </SavedVideosContext.Consumer>
                  </div>
                </LikesAndViewsContainer>
                <hr />
                <ChannelDetails>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelDetailsText theme={theme}>
                      {name}
                    </ChannelDetailsText>
                    <ChannelDetailsText2>{subscriberCount}</ChannelDetailsText2>
                  </div>
                </ChannelDetails>
                <VideoDescriptionText theme={theme}>
                  {description}
                </VideoDescriptionText>
              </VideoTextContainer>
            </VideoDetailContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onFailure = isLight => {
    const FailUrl = isLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <FailureContainer>
        <FailureImage src={FailUrl} />
        <FailHeading themeLight={isLight}>
          Oops! Something Went Wrong
        </FailHeading>
        <FailSubText>
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </FailSubText>
        <FailBtn onClick={this.retryData}>Retry</FailBtn>
      </FailureContainer>
    )
  }

  getApiStatus = isLight => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onProgress(isLight)
      case apiStatusConstants.success:
        return this.onSuccess(isLight)
      case apiStatusConstants.failure:
        return this.onFailure(isLight)
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isLight} = value
            return (
              <FullVideoContainer themeLight={isLight}>
                <Nav />
                <FullVideoMainContainer themeLight={isLight}>
                  {this.getApiStatus(isLight)}
                </FullVideoMainContainer>
              </FullVideoContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
