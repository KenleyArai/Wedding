import React, { Component } from 'react';
import RegistryBox from 'components/RegistryBox';
import './registry.css';

import IronImg from 'components/IronImg';
import image from '../images/registry-pre-load.jpg';

const hdRsvpPageURL = 'https://res.cloudinary.com/hknwrleem/image/upload/c_scale,w_1824/v1505071673/registry_em2tll.jpg';


export default class Registry extends Component {
  render() {
    return (
      <div id='registry-page'>
          <IronImg srcPreload={image} srcLoaded={hdRsvpPageURL} />
          <div id='registry-container'>
            <div id='registry-box'>
              <div id='registry-header'>
                For us…
              </div>
              <RegistryBox title={'Amazon'} link={'https://amazon.com'}/>
              <RegistryBox title={'Bed, Bath, and Beyond'} link={'https://www.bedbathandbeyond.com/'}/>
            </div>
            <div id='registry-box'>
              <div id='registry-header'>
                For a good cause…
              </div>
              <RegistryBox title={'ACLU'} link={'https://action.aclu.org/secure/make-gift-aclu-honor-someone-special'}/>
            </div>
          </div>
        </div>
    );
  }
}