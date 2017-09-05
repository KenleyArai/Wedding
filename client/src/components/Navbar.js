import React, { Component } from 'react';
import Logo from 'components/Logo';
import Nav from 'components/Nav';
import './navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div id="nav-bar">
          <Logo logo={this.props.logo} />
          <Nav />
      </div>
    );
  }
}
