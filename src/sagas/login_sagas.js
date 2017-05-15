import { take, call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST, SET_AUTH, AUTH_FAILED } from '../actions/constants'
import Auth from '../client/auth'

export function* loginFlow() {
  while (true) {
    let request = yield takeLatest(LOGIN_REQUEST)
    let { email, password } = request

    try {
      const response = yield call(Auth.login, email, password)
      if (response.authToken) {
        yield put({ type: SET_AUTH, payload: response })
      }
    } catch (error) {
      yield put({ type: AUTH_FAILED, payload: error.response.data })
    }
  }
}
