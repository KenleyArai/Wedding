import React, { Component } from 'react';
import './announcement.css'; 

export default class Announcement extends Component {

  render() {
    return (
        <div id='announcement-container'>
            <div id='names'>{this.props.ann}</div>
            <div id='date'>Oct. 20th</div>
            <div id='date'>Descanso Gardens</div>
            <div id='date'>5:30 pm</div>
        </div>
    );
  }
}
