import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './logo.css'

export default class Logo extends Component {
  render() {
    return (
        <div id='logo'>
            <Link to='/'>{this.props.logo}</Link>
        </div>
    );
  }
}