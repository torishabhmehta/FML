import { ADD_NEW_SONG } from '../utils/action-types'

export const addNewSong = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_SONG:
      console.log(action.payload)

      return [...state, { id: action.payload.id, title: action.payload.title }]
    default:
      return state
  }
}
