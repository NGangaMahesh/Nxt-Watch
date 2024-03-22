import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 18%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.themeLight ? '#f9f9f9 ' : '#181818')};
`

export const LinkContainer = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0px;
  background-color: ${props => (props.themeLight ? '#f9f9f9 ' : '#181818')};
`

export const EachLink = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => (props.themeLight ? '#475569' : '#ffffff')};
  padding: 2px 5px 2px 12px;
  background-color: ${props => {
    if (props.themeLight) {
      return props.isActive ? '#e2e8f0' : '#f9f9f9'
    }
    return props.isActive ? '#616e7c' : '#181818'
  }}};
`

export const NavText = styled.p`
  color: ${props => {
    if (props.themeLight) {
      return props.isActive ? '#1e293b' : '#475569'
    }
    return '#ffffff'
  }}};;
  font-weight: ${props => (props.isActive ? 700 : 500)};
  font-size: 14px;
  margin-left: 14px;
`

export const ContactContainer = styled.div`
  width: 100%;
  padding: 12px;
  color: ${props => (props.themeLight ? '#1e293b ' : '#ffffff')};
`

export const ContactText = styled.p`
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 32px;
`

export const MediaIcons = styled.div`
  display: flex;
`

export const MediaIcon = styled.img`
  width: 33px;
  height: 30px;
  margin-right: 12px;
`

export const EnjoyText = styled.p`
  font-weight: 600;
`
