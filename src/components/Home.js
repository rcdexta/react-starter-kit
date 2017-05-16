import React, { Component } from 'react'
import { CenteredDiv } from '../styles/common'
import UserSession from '../helpers/user_session'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutRequest } from '../actions/session_actions'

class Home extends Component {

  logout = () => {
    this.props.logoutRequest(UserSession.getUserId())
  }

  render() {
    const { login: { signed_in } } = this.props
    if (!signed_in) {
      return <Redirect to='/login' />
    } else {
      return (
        <CenteredDiv style={{ padding: 50 }}>
          <p>To get started, edit src/components/Home.js and save to reload.</p>
          <p>
            <button onClick={this.logout}>
              Sign out
            </button>
          </p>
        </CenteredDiv>
      )
    }
  }
}

const mapStateToProps = state => ({ login: state.loginReducer })

export default connect(mapStateToProps, { logoutRequest })(Home)
