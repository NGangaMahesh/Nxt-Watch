import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Nav from '../Nav'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import VideoDisplayItem from '../VideoDisplayItem'
import {
  TrendingContainer,
  TrendingMainContainer,
  NameHeaderContainer,
  NameHeaderSubHeading,
  TrendingCircle,
  LoaderContainer,
  TrendingVideoListContainer,
  FailureContainer,
  FailHeading,
  FailSubText,
  FailBtn,
  FailureImage,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDataList: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = ` https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videoDataList: updatedData,
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

  onSuccess = isLight => {
    const {videoDataList} = this.state
    return (
      <TrendingVideoListContainer>
        {videoDataList.map(eachVideo => (
          <VideoDisplayItem
            key={eachVideo.id}
            eachVideo={eachVideo}
            themeLight={isLight}
          />
        ))}
      </TrendingVideoListContainer>
    )
  }

  onFailure = isLight => {
    const FailUrl = isLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <FailureContainer>
        <FailureImage src={FailUrl} alt="failure view" />
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
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <>
              <Header />
              <TrendingContainer themeLight={isLight} data-testid="trending">
                <Nav />
                <TrendingMainContainer themeLight={isLight}>
                  <NameHeaderContainer themeLight={isLight}>
                    <TrendingCircle themeLight={isLight}>
                      <FaFire className="trendingIcon" />
                    </TrendingCircle>

                    <NameHeaderSubHeading themeLight={isLight}>
                      Trending
                    </NameHeaderSubHeading>
                  </NameHeaderContainer>
                  {this.getApiStatus(isLight)}
                </TrendingMainContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
