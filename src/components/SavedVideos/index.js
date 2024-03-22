import {RiMenuAddLine} from 'react-icons/ri'

import Header from '../Header'
import Nav from '../Nav'

import {
  TrendingContainer,
  TrendingCircle,
  NameHeaderContainer,
  NameHeaderSubHeading,
  TrendingMainContainer,
  VideosList,
  NoVideosContainer,
  NoVideosImg,
  FailureText,
} from './styledComponents'

import VideoDisplayItem from '../VideoDisplayItem'
import SavedVideosContext from '../../Context/SavedVideosContext'
import ThemeContext from '../../Context/ThemeContext'

const SavedVideos = () => {
  const savedList = themeValue => {
    const {isLight} = themeValue

    const theme = isLight ? 'light' : 'dark'

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList} = value
          console.log(savedVideosList)
          if (savedVideosList.length === 0) {
            return (
              <NoVideosContainer>
                <NoVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  alt="no saved videos"
                />

                <FailureText theme={theme} as="h1">
                  No saved videos found
                </FailureText>
                <FailureText theme={theme} as="p">
                  You can save your videos while watching them
                </FailureText>
              </NoVideosContainer>
            )
          }

          return (
            <VideosList>
              {savedVideosList.map(eachVideo => (
                <VideoDisplayItem
                  eachVideo={eachVideo}
                  key={eachVideo.id}
                  themeLight={isLight}
                />
              ))}
            </VideosList>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLight} = value
        return (
          <>
            <Header />
            <TrendingContainer themeLight={isLight} data-testid="savedVideos">
              <Nav />
              <TrendingMainContainer themeLight={isLight}>
                <NameHeaderContainer themeLight={isLight}>
                  <TrendingCircle themeLight={isLight}>
                    <RiMenuAddLine className="trendingIcon" />
                  </TrendingCircle>

                  <NameHeaderSubHeading themeLight={isLight}>
                    Trending
                  </NameHeaderSubHeading>
                </NameHeaderContainer>
                {savedList(value)}
              </TrendingMainContainer>
            </TrendingContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
