import { call, put } from 'redux-saga/effects'
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants'
import Auth from '../client/auth'

export function* loginFlow({ email, password }) {
  const response = yield call(Auth.login, email, password)

  if (response.authToken) {
    yield put({ type: LOGIN_SUCCESS, payload: response })
  } else {
    yield put({ type: LOGIN_ERROR, payload: response })
  }
}
