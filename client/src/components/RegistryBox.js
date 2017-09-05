import React, { Component } from 'react';
import './registrybox.css';

export default class RegistryBox extends Component {
  render() {
    return (
      <div className='registry-item'>
          <a href={this.props.link}>{this.props.title}</a>
      </div>
    );
  }
}