import axios from 'axios'
import { ADD_NEW_SONG } from '../utils/action-types'

export const addNewSong = (id, title) => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_SONG,
      payload: { id, title }
    })
  }
}
