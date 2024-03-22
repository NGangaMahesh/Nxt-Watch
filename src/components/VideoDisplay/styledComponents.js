import styled from 'styled-components'

export const VideoContainer = styled.li`
  width: 100%;
  list-style: none;
  margin-bottom: 28px;
`

export const ThumbnailImg = styled.img`
  width: 100%;
`
export const VideoTextContainer = styled.div`
  margin-top: 10px;
  display: flex;
  color: #475569;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`

export const VideoTitle = styled.p`
  margin: 0px;
  color: ${props => (props.themeLight ? '#1e293b ' : '#ffffff')};
`

export const ChannelName = styled.p`
  margin: 0px;
  margin-top: 5px;
`

export const SubDiv = styled.div`
  display: flex;
  width: 57%;
  justify-content: space-between;
`
