import { LOGIN_REQUESTING, LOGOUT_USER } from './constants'

export const loginRequest = function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password
  }
}

export const logoutRequest = function loginRequest({ userId }) {
  return {
    type: LOGOUT_USER,
    userId
  }
}
