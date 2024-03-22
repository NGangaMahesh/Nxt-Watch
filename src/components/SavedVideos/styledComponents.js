import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.themeLight ? '#f9f9f9' : '#0f0f0f')};
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: space-between;
`

export const TrendingMainContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => (props.themeLight ? '#f9f9f9' : '#0f0f0f')};
`

export const VideosList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
`

export const NoVideosImg = styled.img`
  width: 80%;
  padding-top: 15px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const NameHeaderContainer = styled.div`
  display: flex;
  background-color: ${props => (props.themeLight ? '#cccccc ' : '#231f20')};
  padding-inline: 20px;
  align-items: center;
  margin-bottom: 20px;
`

export const TrendingCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: ${props => (props.themeLight ? '#cbd5e1 ' : '#000000')};
`

export const NameHeaderSubHeading = styled.h2`
  color: ${props => (props.themeLight ? '#1e293b' : '#ffffff')};
`
export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
`
