import React, { Component } from 'react';
import RSVPForm from 'components/RsvpForm';
import './rsvppage.css';

import IronImg from 'components/IronImg';
import image from '../images/rsvp-preload.jpg';

const hdRsvpPageURL = 'https://res.cloudinary.com/hknwrleem/image/upload/c_fit,h_3024,w_1824/v1505070835/rsvp_hfmkog.jpg';


export default class RSVP extends Component {
  render() {
    return (
      <div id='rsvp-page'>
           <IronImg srcPreload={image} srcLoaded={hdRsvpPageURL} />
           <RSVPForm api="/invitees" /> 
      </div>
    );
  }
}