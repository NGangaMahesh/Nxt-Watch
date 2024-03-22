import styled from 'styled-components'

export const HVideoContainer = styled.li`
  width: 100%;
  list-style: none;
  margin-bottom: 28px;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 380px;
  margin-right: 20px;
`
export const GameTextContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  color: #475569;
`

export const GameTitle = styled.p`
  margin: 0px;
  color: ${props => (props.themeLight ? '#1e293b ' : '#ffffff')};
  font-weight: 500;
`

export const ViewCount = styled.p`
  margin: 0px;
  margin-top: 5px;
`
