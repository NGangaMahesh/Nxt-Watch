import {Link} from 'react-router-dom'
import {
  HVideoContainer,
  ThumbnailImg,
  VideoTextContainer,
  VideoTitle,
  ChannelName,
  SubDiv,
  SubPara,
} from './styledComponents'
import './index.css'

const VideoDisplayItem = props => {
  const {eachVideo, themeLight} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = eachVideo
  const {name} = channel

  const calculateYearsAgo = dateString => {
    const inputDate = new Date(dateString)
    const currentDate = new Date()

    const yearsDifference = currentDate.getFullYear() - inputDate.getFullYear()

    return (
      yearsDifference +
      (currentDate.getMonth() < inputDate.getMonth() ||
      (currentDate.getMonth() === inputDate.getMonth() &&
        currentDate.getDate() < inputDate.getDate())
        ? -1
        : 0)
    )
  }

  const years = calculateYearsAgo(publishedAt)

  return (
    <Link to={`/videos/${id}`} className="HVideoLink">
      <HVideoContainer>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <VideoTextContainer>
          <div>
            <VideoTitle themeLight={themeLight}>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <SubDiv>
              <SubPara>{viewCount} Views</SubPara>
              <SubPara>. {years} years ago</SubPara>
            </SubDiv>
          </div>
        </VideoTextContainer>
      </HVideoContainer>
    </Link>
  )
}

export default VideoDisplayItem
