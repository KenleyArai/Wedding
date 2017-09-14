import React, { Component } from 'react';
import RegistryBox from 'components/RegistryBox';
import './registry.css';

import IronImg from 'components/IronImg';
import MediaQuery from 'react-responsive';
import image from '../images/registry-pre-load.jpg';

const hdRsvpPageURL = 'https://res.cloudinary.com/hknwrleem/image/upload/c_scale,w_1824/v1505071673/registry_em2tll.jpg';


export default class Registry extends Component {
  render() {
    return (
      <div id='registry-page'>
          <MediaQuery minWidth={961}>
                <IronImg srcPreload={image} srcLoaded={hdRsvpPageURL} />
          </MediaQuery>
        </div>
    );
  }
}