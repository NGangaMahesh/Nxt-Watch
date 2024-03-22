import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.themeLight ? '#f9f9f9 ' : '#0f0f0f')};
`

export const MainContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => (props.themeLight ? '#f9f9f9' : '#0f0f0f')};
`

export const BannerContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const BannerLogo = styled.img`
  width: 150px;
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 20px;
`

export const GetBtn = styled.button`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  width: 100px;
  height: 40px;
  font-weight: 700;
  font-family: Roboto;
`

export const SearchContainer = styled.div`
  padding-inline: 20px;
  display: flex;
  margin-top: 30px;
`
export const SearchInput = styled.input`
  border: 1px solid #909090;
  width: 220px;
  padding: 5px;
  background-color: transparent;
  outline: none;
  color: ${props => (props.themeLight ? '#000000 ' : '#ffffff')};
`

export const SearchBtn = styled.button`
  background-color: transparent;
  border: 1px solid #909090;
  font-size: 14px;
  width: 50px;
  color: ${props => (props.themeLight ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-inline: 20px;
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const FailHeading = styled.h2`
  color: ${props => (props.themeLight ? '#1e293b' : '#f9f9f9')};
`

export const FailSubText = styled.p`
  color: #7e858e;
`

export const FailBtn = styled.button`
  background-color: #4f46e5;
  color: #f9f9f9;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 90px;
  height: 40px;
  font-weight: 500;
`

export const FailureImage = styled.img`
  width: 240px;
  height: 220px;
`
