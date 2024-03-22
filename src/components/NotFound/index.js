import Header from '../Header'
import Nav from '../Nav'
import ThemeContext from '../../Context/ThemeContext'

import {
  MainBody,
  SidebarContainer,
  NotFoundImage,
  NotFoundContainer,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value
      const theme = isLight ? 'light' : 'dark'

      const imgUrl = !isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div>
          <Header />
          <MainBody>
            <SidebarContainer>
              <Nav />
            </SidebarContainer>
            <NotFoundContainer theme={theme}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundText theme={theme}>Page Not Found</NotFoundText>
              <NotFoundText as="p" theme={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </MainBody>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
