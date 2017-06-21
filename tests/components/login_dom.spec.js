import React from 'react'
import { Login } from '../../src/components/Login'
import { mount } from 'enzyme'
import sinon from 'sinon'

const render = () => {
  const spy = sinon.spy()
  const component = mount(<Login login={{ requesting: false, signed_in: false, error: null }} loginRequest={spy}/>)
  const emailField = component.find('#emailField')
  const passwordField = component.find('#passwordField')
  const submitButton = component.find('#submitButton')
  return { emailField, passwordField, submitButton, spy}
}

describe('<Login/>', () => {
  it('test form submission', () => {
    const { emailField, passwordField, submitButton, spy} = render()
    emailField.simulate('change', { target: { value: 'a@b.com' } })
    passwordField.simulate('change', { target: { value: 'abcd' } })
    submitButton.simulate('click')
    expect(spy.calledWith({email: 'a@b.com', password: 'abcd'})).toBeTruthy()
  })
})
