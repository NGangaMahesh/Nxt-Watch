import {Link, withRouter} from 'react-router-dom'
import {FaHome, FaFire, FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../Context/ThemeContext'
import {
  NavContainer,
  LinkContainer,
  EachLink,
  NavText,
  ContactContainer,
  ContactText,
  MediaIcons,
  MediaIcon,
  EnjoyText,
} from './styledComponents'

import './index.css'

const Nav = prop => {
  const {history} = prop
  const currentPage = history.location.pathname
  const isHome = currentPage === '/'
  const isTrending = currentPage === '/trending'
  const isGaming = currentPage === '/gaming'
  const isSavedVideos = currentPage === '/saved-videos'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLight} = value
        return (
          <NavContainer themeLight={isLight}>
            <LinkContainer themeLight={isLight}>
              <Link to="/" className="linkNav">
                <EachLink isActive={isHome} themeLight={isLight}>
                  <FaHome className={isHome ? 'active' : ''} />
                  <NavText isActive={isHome} themeLight={isLight}>
                    Home
                  </NavText>
                </EachLink>
              </Link>
              <Link to="/trending" className="linkNav">
                <EachLink isActive={isTrending} themeLight={isLight}>
                  <FaFire className={isTrending ? 'active' : ''} />
                  <NavText isActive={isTrending} themeLight={isLight}>
                    Trending
                  </NavText>
                </EachLink>
              </Link>
              <Link to="/gaming" className="linkNav">
                <EachLink isActive={isGaming} themeLight={isLight}>
                  <FaGamepad className={isGaming ? 'active' : ''} />
                  <NavText isActive={isGaming} themeLight={isLight}>
                    Gaming
                  </NavText>
                </EachLink>
              </Link>
              <Link to="/saved-videos" className="linkNav">
                <EachLink isActive={isSavedVideos} themeLight={isLight}>
                  <MdPlaylistAdd className={isSavedVideos ? 'active' : ''} />
                  <NavText isActive={isSavedVideos} themeLight={isLight}>
                    Saved Videos
                  </NavText>
                </EachLink>
              </Link>
            </LinkContainer>

            <ContactContainer themeLight={isLight}>
              <ContactText>CONTACT US</ContactText>
              <MediaIcons>
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </MediaIcons>
              <EnjoyText>
                Enjoy! Now to see your channels and recommendations!
              </EnjoyText>
            </ContactContainer>
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Nav)
