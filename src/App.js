import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/index'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ThemeContext from './Context/ThemeContext'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosContext from './Context/SavedVideosContext'
import Protect from './Protect'
import './App.css'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isLight: true,
    savedVideosList: [],
    save: false,
  }

  addVideosToSavedVideos = videoDetails => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, videoDetails],
    }))
  }

  deleteVideosFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedList})
  }

  updateSaveVideosList = videoDetails => {
    const {save} = this.state
    if (save) {
      this.deleteVideosFromSavedVideos(videoDetails)
    } else {
      this.addVideosToSavedVideos(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prev => ({save: !prev.save}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isLight: !prevState.isLight,
    }))
  }

  render() {
    const {isLight, save, savedVideosList} = this.state
    return (
      <ThemeContext.Provider value={{isLight, changeTheme: this.changeTheme}}>
        <SavedVideosContext.Provider
          value={{
            save,
            savedVideosList,
            addVideosToSavedVideos: this.addVideosToSavedVideos,
            deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
            updateSave: this.updateSave,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <Protect exact path="/" component={Home} />
            <Protect exact path="/trending" component={Trending} />
            <Protect exact path="/gaming" component={Gaming} />
            <Protect exact path="/saved-videos" component={SavedVideos} />
            <Protect exact path="/videos/:id" component={VideoItemDetails} />
            <Protect component={NotFound} />
          </Switch>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
