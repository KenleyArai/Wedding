import React, { Component } from 'react';
import RSVPForm from 'components/RsvpForm';
import './rsvppage.css';

export default class RSVP extends Component {
  render() {
    return (
      <div id='rsvp-page'>
           <RSVPForm api="/invitees" /> 
      </div>
    );
  }
}