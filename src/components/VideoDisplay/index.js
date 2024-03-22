import {Link} from 'react-router-dom'
import {
  VideoContainer,
  ThumbnailImg,
  ProfileImage,
  VideoTextContainer,
  VideoTitle,
  ChannelName,
  SubDiv,
} from './styledComponents'
import './index.css'

const VideoDisplay = props => {
  const {eachVideo, themeLight} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = eachVideo
  const {name, profileImageUrl} = channel

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
    <Link to={`/videos/${id}`} className="videoLink">
      <VideoContainer>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <VideoTextContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <div>
            <VideoTitle themeLight={themeLight}>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <SubDiv>
              <p>{viewCount} Views</p>
              <p>. {years} years ago</p>
            </SubDiv>
          </div>
        </VideoTextContainer>
      </VideoContainer>
    </Link>
  )
}

export default VideoDisplay
