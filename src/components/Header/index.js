import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import {
  HeaderContainer,
  LogoIcon,
  RightNavContainer,
  SwitchMode,
  UserIcon,
  LogoutBtn,
  LogoutPopupContent,
  Button,
} from './styledComponents'

const Header = props => {
  const userLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLight, changeTheme} = value
        const onChangeTheme = () => {
          changeTheme()
        }
        return (
          <HeaderContainer themeLight={isLight}>
            {isLight ? (
              <Link to="/">
                <LogoIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
            ) : (
              <Link to="/">
                <LogoIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </Link>
            )}
            <RightNavContainer>
              {isLight ? (
                <SwitchMode
                  type="button"
                  onClick={onChangeTheme}
                  themeLight={isLight}
                  data-testid="theme"
                >
                  <FaMoon />
                </SwitchMode>
              ) : (
                <SwitchMode
                  type="button"
                  onClick={onChangeTheme}
                  data-testid="theme"
                >
                  <FiSun />
                </SwitchMode>
              )}
              <UserIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
                className="logout-popup"
              >
                {close => (
                  <LogoutPopupContent theme={isLight}>
                    <p>Are you sure, you want to logout</p>
                    <div>
                      <Button outline type="button" onClick={() => close()}>
                        Cancel
                      </Button>
                      <Button
                        bgColor="blue"
                        color="white"
                        type="button"
                        onClick={userLogOut}
                      >
                        Confirm
                      </Button>
                    </div>
                  </LogoutPopupContent>
                )}
              </Popup>
            </RightNavContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
