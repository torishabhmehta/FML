import { combineReducers } from 'redux'

import { setPlayingVideo } from './play-new-song'
import { addNewSong } from './add-song-to-queue'

const rootReducer = combineReducers({
  playingVideo: setPlayingVideo,
  songList: addNewSong
})

export default rootReducer
