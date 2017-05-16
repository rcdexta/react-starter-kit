import { takeLatest } from 'redux-saga/effects'
import { loginFlow } from './login_sagas'
import {LOGIN_REQUESTING} from '../actions/constants'

export default function* root() {
  yield [
    takeLatest(LOGIN_REQUESTING, loginFlow)
  ]
}
