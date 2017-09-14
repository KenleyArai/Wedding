import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.css'; 

export default class Nav extends Component {
  render() {
    return (
        <div id='links'>
            <Link to='rsvp' className='menu-link'><i className="fa fa-envelope-o" aria-hidden="true"></i> RSVP</Link>
            <Link to='registry' className='menu-link'><i className="fa fa-gift" aria-hidden="true"></i> Registry</Link>
            <Link to='dates' className='menu-link'><i className="fa fa-calendar" aria-hidden="true"></i> Dates</Link>
            <Link to='logistics' className='menu-link'><i className="fa fa-map" aria-hidden="true"></i> Logistics</Link>
        </div>
    );
  }
}