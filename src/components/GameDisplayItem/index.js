import {Link} from 'react-router-dom'
import {
  HVideoContainer,
  ThumbnailImg,
  GameTextContainer,
  GameTitle,
  ViewCount,
} from './styledComponents'
import './index.css'

const GameDisplayItem = props => {
  const {eachVideo, themeLight} = props
  const {id, title, thumbnailUrl, viewCount} = eachVideo

  return (
    <Link to={`/videos/${id}`} className="GVideoLink">
      <HVideoContainer>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <GameTextContainer>
          <GameTitle themeLight={themeLight}>{title}</GameTitle>
          <ViewCount>{viewCount} Watching Worldwide</ViewCount>
        </GameTextContainer>
      </HVideoContainer>
    </Link>
  )
}

export default GameDisplayItem
