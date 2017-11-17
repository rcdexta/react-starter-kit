import React from 'react'
import renderer from 'react-test-renderer'
import { Login } from '../../src/components/Login'

describe('<Login/>', () => {
  it('snapshot test', () => {
    const component = renderer.create(<Login login={{ requesting: false, signed_in: false, error: null }} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('snapshot progress bar behavior', () => {
    const component = renderer.create(<Login login={{ requesting: true, signed_in: false, error: null }} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
