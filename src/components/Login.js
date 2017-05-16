import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CenteredDiv } from '../styles/common'
import { LoginPanel, SubmitProgressDiv } from '../styles/login'
import { Redirect } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

import { loginRequest } from '../actions/session_actions'

class Login extends Component {
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
        <CenteredDiv>
          <LoginPanel rounded={false}>
            <TextField value={email} floatingLabelText="Email" onChange={this.updateField.bind(this, 'email')} errorText={error} />
            <TextField value={password} floatingLabelText="Password" type="password" onChange={this.updateField.bind(this, 'password')} />
            {requesting
              ? <SubmitProgressDiv><CircularProgress size={30} /></SubmitProgressDiv>
              : <RaisedButton label="SUBMIT" backgroundColor="#a4c639" primary onClick={this.submit} style={{ marginTop: 10 }} />}
          </LoginPanel>
        </CenteredDiv>
      )
    }
  }
}

const mapStateToProps = state => ({ login: state.loginReducer })

export default connect(mapStateToProps, { loginRequest })(Login)
