import { LOGIN_REQUEST } from './constants'

export const loginRequest = function loginRequest ({ email, password }) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
  }
}