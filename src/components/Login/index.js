import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import {
  LoginContainer,
  SubLoginContainer,
  LogoImg,
  FormContainer,
  LabelText,
  UserInput,
  CheckBoxContainer,
  CheckBox,
  CheckText,
  SubmitBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
    showPass: false,
  }

  setName = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  getUserName = isLight => {
    const {username} = this.state

    return (
      <>
        <LabelText themeLight={isLight} htmlFor="username">
          USERNAME
        </LabelText>
        <UserInput
          themeLight={isLight}
          placeholder="Username"
          type="text"
          onChange={this.setName}
          value={username}
          id="username"
        />
      </>
    )
  }

  getPassword = isLight => {
    const {password, showPass} = this.state

    return (
      <>
        <LabelText themeLight={isLight} htmlFor="password">
          PASSWORD
        </LabelText>
        <UserInput
          themeLight={isLight}
          placeholder="Password"
          type={showPass ? 'text' : 'password'}
          onChange={this.setPassword}
          value={password}
          id="password"
        />
      </>
    )
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPass: !prevState.showPass,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  checkDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {isError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value
          return (
            <LoginContainer themeLight={isLight}>
              <SubLoginContainer themeLight={isLight}>
                {isLight ? (
                  <LogoImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LogoImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                )}
                <FormContainer
                  onSubmit={this.checkDetails}
                  themeLight={isLight}
                >
                  {this.getUserName(isLight)}
                  {this.getPassword(isLight)}
                  <CheckBoxContainer>
                    <CheckBox
                      id="checkBox"
                      type="checkbox"
                      onClick={this.showPassword}
                      themeLight={isLight}
                    />
                    <CheckText htmlFor="checkBox" themeLight={isLight}>
                      Show Password
                    </CheckText>
                  </CheckBoxContainer>

                  <SubmitBtn type="submit">Login</SubmitBtn>
                  {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </FormContainer>
              </SubLoginContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
