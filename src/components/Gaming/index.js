import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Nav from '../Nav'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import GameDisplayItem from '../GameDisplayItem'
import {
  GamingContainer,
  GamingMainContainer,
  NameHeaderContainer,
  NameHeaderSubHeading,
  GamingCircle,
  LoaderContainer,
  GameListContainer,
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
class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gameDataList: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = ` https://apis.ccbp.in/videos/gaming`
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
        viewCount: video.view_count,
      }))
      this.setState({
        gameDataList: updatedData,
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
    const {gameDataList} = this.state
    return (
      <GameListContainer>
        {gameDataList.map(eachVideo => (
          <GameDisplayItem
            key={eachVideo.id}
            eachVideo={eachVideo}
            themeLight={isLight}
          />
        ))}
      </GameListContainer>
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
              <GamingContainer themeLight={isLight} data-testid="gaming">
                <Nav />
                <GamingMainContainer themeLight={isLight}>
                  <NameHeaderContainer themeLight={isLight}>
                    <GamingCircle themeLight={isLight}>
                      <FaGamepad className="trendingIcon" />
                    </GamingCircle>

                    <NameHeaderSubHeading themeLight={isLight}>
                      Gaming
                    </NameHeaderSubHeading>
                  </NameHeaderContainer>
                  {this.getApiStatus(isLight)}
                </GamingMainContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
