import styled from 'styled-components'

export const GamingContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.themeLight ? '#f9f9f9' : '#0f0f0f ')};
`

export const GamingMainContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => (props.themeLight ? '#f9f9f9' : '#0f0f0f ')};
`
export const NameHeaderContainer = styled.div`
  display: flex;
  background-color: ${props => (props.themeLight ? '#cccccc ' : '#231f20')};
  padding-inline: 20px;
  align-items: center;
  margin-bottom: 20px;
`

export const GamingCircle = styled.div`
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

export const GameListContainer = styled.ul`
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
