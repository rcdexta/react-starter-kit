import { call, put } from 'redux-saga/effects'
import { LOGOUT_SUCCESS } from '../actions/constants'
import Auth from '../client/auth'
import UserSession from '../helpers/user_session'

export function* logoutFlow({ userId }) {
  yield call(Auth.logout, userId)
  UserSession.destroySession()
  yield put({ type: LOGOUT_SUCCESS })
}
