import { takeLatest } from 'redux-saga/effects'
import { loginFlow } from './login_sagas'
import { logoutFlow } from './logout_sagas'
import {LOGIN_REQUESTING, LOGOUT_USER} from '../actions/constants'

export default function* root() {
  yield [
    takeLatest(LOGIN_REQUESTING, loginFlow),
    takeLatest(LOGOUT_USER, logoutFlow)
  ]
}
