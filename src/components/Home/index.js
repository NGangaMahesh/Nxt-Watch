import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Nav from '../Nav'
import ThemeContext from '../../Context/ThemeContext'
import VideoDisplay from '../VideoDisplay'
import Header from '../Header'
import {
  HomeContainer,
  MainContainer,
  BannerContainer,
  CloseBtn,
  BannerLogo,
  BannerText,
  GetBtn,
  SearchContainer,
  SearchInput,
  SearchBtn,
  VideoListContainer,
  LoaderContainer,
  FailureContainer,
  FailHeading,
  FailSubText,
  FailBtn,
  FailureImage,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isPopup: true,
    search: '',
    apiStatus: apiStatusConstants.initial,
    videoDataList: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
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

  onClickCloseBanner = () => {
    this.setState({isPopup: false})
  }

  adPopup = () => (
    <BannerContainer data-testid="banner">
      <CloseBtn data-testid="close" onClick={this.onClickCloseBanner}>
        <IoMdClose size={25} />
      </CloseBtn>

      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <GetBtn>GET IT NOW </GetBtn>
    </BannerContainer>
  )

  setSearch = event => {
    this.setState({search: event.target.value})
  }

  searchResult = () => {
    this.getVideoDetails()
  }

  getSearch = isLight => {
    const {search} = this.state
    return (
      <SearchContainer>
        <SearchInput
          type="search"
          onChange={this.setSearch}
          value={search}
          placeholder="search"
          themeLight={isLight}
        />
        <SearchBtn
          onClick={this.searchResult}
          themeLight={isLight}
          data-testid="searchButton"
        >
          <FaSearch />
        </SearchBtn>
      </SearchContainer>
    )
  }

  onProgress = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  reset = () => {
    this.setState({search: ''}, () => {
      this.getVideoDetails()
    })
  }

  noDataFound = isLight => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="not found"
      />
      <FailHeading themeLight={isLight}>No Search result found</FailHeading>
      <FailSubText>Try different key words or remove search filter</FailSubText>
      <FailBtn onClick={this.reset}>Retry</FailBtn>
    </FailureContainer>
  )

  onSuccess = isLight => {
    const {videoDataList} = this.state

    if (videoDataList.length === 0) {
      return this.noDataFound(isLight)
    }
    return (
      <VideoListContainer>
        {videoDataList.map(eachVideo => (
          <VideoDisplay
            key={eachVideo.id}
            eachVideo={eachVideo}
            themeLight={isLight}
          />
        ))}
      </VideoListContainer>
    )
  }

  retryData = () => {
    this.getVideoDetails()
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
    const {isPopup} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <>
              <Header />
              <HomeContainer themeLight={isLight} data-testid="home">
                <Nav />
                <MainContainer themeLight={isLight}>
                  {isPopup && this.adPopup()}
                  {this.getSearch(isLight)}
                  {this.getApiStatus(isLight)}
                </MainContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
