import React from 'react';
import { loginFlow } from '../../src/sagas/login_saga'
import Auth from '../../src/client/auth'
import {LOGIN_SUCCESS, LOGIN_ERROR} from '../../src/actions/constants'
import UserSession from '../../src/helpers/user_session'
import { call, put } from 'redux-saga/effects'

const email = 'a@b.com'
const password = 'abcd'
const incorrectPassword = 'abcd'
const response = { authToken: '12345', userId: 'abcd' }
const errorResponse = { status: 'Error' }


describe('Login Saga', () => {

  const saga = loginFlow({email: email, password: password})

  it('should call Auth api to verify credentials', (done) => {
    let output = saga.next().value
    let expected = call(Auth.login, email, password)
    expect(output).toEqual(expected)
    done()
  });

  it('should emit LOGIN_SUCCESS when credentials are correct', (done) => {
    UserSession.setSession = jest.fn()
    let output = saga.next(response).value
    expect(UserSession.setSession).toBeCalledWith(response)

    let expected = put({type: LOGIN_SUCCESS, payload: response})
    const finished = saga.next().done
    expect(finished).toBeTruthy()
    expect(output).toEqual(expected)
    done()
  });

  const anotherSaga = loginFlow({email: email, password: incorrectPassword})

  it('should emit LOGIN_ERROR when credentials are wrong', (done) => {
    anotherSaga.next()
    let output =  anotherSaga.next(errorResponse).value
    let expected = put({type: LOGIN_ERROR, payload: errorResponse})
    const finished = anotherSaga.next().done
    expect(finished).toBeTruthy()
    expect(output).toEqual(expected)
    done()
  });

})
