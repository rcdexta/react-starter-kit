import { call, put } from 'redux-saga/effects'
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants'
import Auth from '../client/auth'
import UserSession from '../helpers/user_session'

export function* loginFlow({ email, password }) {
  const response = yield call(Auth.login, email, password)

  if (response.authToken) {
    UserSession.setSession(response)
    yield put({ type: LOGIN_SUCCESS, payload: response })
  } else {
    yield put({ type: LOGIN_ERROR, payload: response })
  }
}
