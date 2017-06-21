import React, { Component } from 'react'
import '../styles/base/mini.css'
import { AppHeader, HeaderText } from '../styles/app'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <HeaderText>React Starter</HeaderText>
        </AppHeader>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
