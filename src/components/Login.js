import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginPanel, SubmitProgressDiv, SubmitButton, TextField, ErrorBlock } from '../styles/login'
import { Redirect } from 'react-router-dom'

import { loginRequest } from '../actions/session_actions'

export class Login extends Component {
  state = { email: '', password: '' }

  updateField = (paramName, event) => this.setState({ [paramName]: event.target.value })

  submit = () => {
    this.props.loginRequest(this.state)
  }

  render() {
    const { email, password } = this.state
    const { login: { requesting, signed_in, error } } = this.props

    if (signed_in) {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    } else {
      return (
        <div className="row">
          <div className="col-sm" />
          <LoginPanel className="col-sm-12 col-md-8 col-lg-8">
            <form>
              <div className="input-group fluid">
                <TextField type="text" placeholder="Email" id="emailField" onChange={this.updateField.bind(this, 'email')} value={email} />
              </div>
              <div className="input-group fluid">
                <TextField type="password" placeholder="Password" id="passwordField" onChange={this.updateField.bind(this, 'password')} value={password} />
              </div>
              <ErrorBlock className="input-group fluid" >
                {error}
              </ErrorBlock>
              <div className="input-group fluid">
                {requesting
                  ? <SubmitProgressDiv><div className="spinner-donut" /></SubmitProgressDiv>
                  : <SubmitButton className="primary" type="submit" value="Submit" onClick={this.submit} />}
              </div>
            </form>
          </LoginPanel>
          <div className="col-sm" />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({ login: state.loginReducer })

export default connect(mapStateToProps, { loginRequest })(Login)
