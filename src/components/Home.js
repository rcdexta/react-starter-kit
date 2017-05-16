import React, { Component } from 'react'
import { CenteredDiv } from '../styles/common'
import UserSession from '../helpers/user_session'
import {withRouter} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <CenteredDiv style={{ padding: 50 }}>
        <p>To get started, edit src/components/Home.js and save to reload.</p>
        <p>
          <button
            onClick={() => {
              UserSession.destroySession()
              this.props.history.push('/login')
            }}
          >
            Sign out
          </button>
        </p>
      </CenteredDiv>
    )
  }
}

export default withRouter(Home)
