import styled from 'styled-components'

export const FullVideoContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: space-between;
`

export const FullVideoMainContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow-y: scroll;
  background-color: ${props => (props.themeLight ? '#f8fafc ' : '#0f0f0f')};
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
export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  flex-grow: 1;
  padding: 15px;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const VideoDetailContainer = styled.div`
  height: 100%;
`

export const PlayerContainer = styled.div`
  height: 40%;
  @media screen and (min-width: 768px) {
    height: 70%;
    padding: 20px 20px 0px 20px;
  }
`

export const VideoTextContainer = styled.div`
  margin: 0px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  margin-top: 8px;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#1e293b' : '#ffffff')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const LikesAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: #475569;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
`

export const ViewsAndPostedContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewsText = styled.p`
  margin: 0px 10px 0px 0px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-family: Roboto;
  font-size: 14px;
  padding: 0px;
  margin-right: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`

export const ChannelLogo = styled.img`
  width: 50px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`

export const ChannelDetailsText = styled.p`
  margin: 0px;
  padding-left: 15px;
  color: ${props => (props.theme === 'dark' ? '#1e293b' : '#ffffff')};
`
export const ChannelDetailsText2 = styled(ChannelDetailsText)`
  color: #64748b;
`
export const VideoDescriptionText = styled.p`
  color: ${props => (props.theme === 'dark' ? '#1e293b' : '#ffffff')};
  margin-bottom: 20px;
`
