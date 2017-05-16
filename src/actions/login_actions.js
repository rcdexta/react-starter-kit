import { LOGIN_REQUESTING } from './constants'

export const loginRequest = function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password
  }
}
