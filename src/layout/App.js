import React, { Component } from 'react';
import logo from '../images/prologo.png';
import {AppHeader, LogoImg, HeaderText} from '../styles/AppStyles'

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <LogoImg src={logo} alt="logo" />
          <HeaderText>React Starter</HeaderText>
        </AppHeader>
        {this.props.children}
      </div>
    );
  }
}

export default App;
