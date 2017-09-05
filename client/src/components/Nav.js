import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.css'; 

export default class Nav extends Component {
  render() {
    return (
        <div id='links'>
            <Link to='rsvp' className='menu-link'>RSVP</Link>
            <Link to='registry' className='menu-link'>Registry</Link>
            <Link to='dates' className='menu-link'>Dates</Link>
            <Link to='logistics' className='menu-link'>Logistics</Link>
        </div>
    );
  }
}