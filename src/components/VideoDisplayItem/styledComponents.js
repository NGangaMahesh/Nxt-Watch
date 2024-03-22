import styled from 'styled-components'

export const HVideoContainer = styled.li`
  width: 80%;
  height: 200px;
  list-style: none;
  margin-bottom: 28px;
  display: flex;
`

export const ThumbnailImg = styled.img`
  width: 40%;
  margin-right: 20px;
`
export const VideoTextContainer = styled.div`
  width: 30%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  color: #475569;
`

export const VideoTitle = styled.p`
  margin: 0px;
  color: ${props => (props.themeLight ? '#1e293b ' : '#ffffff')};
  font-weight: 500;
`

export const ChannelName = styled.p`
  margin: 0px;
  margin-top: 5px;
`

export const SubDiv = styled.div`
  display: flex;
  width: 100%;
`

export const SubPara = styled.p`
  margin-right: 20px;
`
