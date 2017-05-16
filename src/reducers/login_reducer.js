import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants'

const initialState = {
  requesting: false,
  successful: false,
  error: null
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        error: 'Incorrect Credentials... Pls try again!'
      }
    default:
      return state
  }
}

export default loginReducer
