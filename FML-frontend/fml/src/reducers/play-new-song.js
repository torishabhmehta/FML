import { PLAY_NEW_SONG } from '../utils/action-types'

export const setPlayingVideo = (state = { id: '', title: '' }, action) => {
  switch (action.type) {
    case PLAY_NEW_SONG:
      return { id: action.payload.id, title: action.payload.title }
    default:
      return state
  }
}
