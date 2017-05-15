import { SET_AUTH, AUTH_FAILED } from '../actions/constants'

function loginReducer(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, ...action.payload }
    case AUTH_FAILED:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default loginReducer
