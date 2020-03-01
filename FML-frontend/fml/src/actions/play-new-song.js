import axios from 'axios'
import { PLAY_NEW_SONG } from '../utils/action-types'

export const playNewSong = (id, title) => {
  return dispatch => {
    dispatch({
      type: PLAY_NEW_SONG,
      payload: { id, title }
    })
  }
}
