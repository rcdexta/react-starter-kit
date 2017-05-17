import { takeLatest } from 'redux-saga/effects'
import { loginFlow } from './login_saga'
import { logoutFlow } from './logout_saga'
import {LOGIN_REQUESTING, LOGOUT_USER} from '../actions/constants'

export default function* root() {
  yield [
    takeLatest(LOGIN_REQUESTING, loginFlow),
    takeLatest(LOGOUT_USER, logoutFlow)
  ]
}
