import React, { Component } from 'react'
import logo from '../images/prologo.png'
import { LogoImg } from '../styles/app'
import AppBar from 'material-ui/AppBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="React Starter Kit" iconElementLeft={<LogoImg src={logo} />} iconStyleLeft={{ marginTop: 18 }} style={{ backgroundColor: '#1E5992' }} />
        {this.props.children}
      </div>
    )
  }
}
