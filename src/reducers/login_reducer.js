import { LOGIN_REQUESTING, LOGOUT_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants'

const initialState = {
  requesting: false,
  signed_in: false,
  error: null,
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        ...state,
        requesting: true,
        signed_in: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        signed_in: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        requesting: false,
        signed_in: false,
        error: 'Incorrect Credentials... Pls try again!'
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        requesting: false,
        signed_in: false,
        error: null
      }
    default:
      return state
  }
}

export default loginReducer
