import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 8vh;
  background-color: ${props => (props.themeLight ? '#f9f9f9 ' : '#181818')};
  padding-inline: 400px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 25px 20px -20px rgba(0, 0, 0, 0.08);
`

export const LogoIcon = styled.img`
  width: 150px;
  height: 40px;
`

export const RightNavContainer = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SwitchMode = styled.button`
  color: ${props => (props.themeLight ? '#000000' : '#ffffff')};
  height: 100%;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 28px;
  cursor: pointer;
`

export const UserIcon = styled.img`
  width: 36px;
  height: 100%;
`

export const LogoutBtn = styled.button`
  padding-inline: 8px;
  width: 80px;
  padding: 8px;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  background-color: transparent;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
`

export const CloseButton = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`
export const LogoutPopupContent = styled.div`
  background-color: ${props => (props.themeLight ? '#000000' : '#ffffff')};
  padding: 50px;
  border-radius: 10px;
  text-align: center;
`

export const Button = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 80px;
  height: 35px;
  margin: 5px;
  color: ${props => (props.outline ? '#3b82f6' : 'white')};
  border-radius: 5px;
  outline: none;
  border: 1px solid #3b82f6;
`
