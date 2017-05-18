import React, { Component } from 'react'
import logo from '../images/prologo.png'
import '../styles/base/mini.css'
import { LogoImg, AppHeader, HeaderText } from '../styles/app'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <LogoImg src={logo} alt="logo" />
          <HeaderText>React Starter</HeaderText>
        </AppHeader>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
