import { fork } from 'redux-saga/effects'
import {loginFlow} from './login_sagas'

export default function* root() {
  yield fork(loginFlow)
}
