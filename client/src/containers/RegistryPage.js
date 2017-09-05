import React, { Component } from 'react';
import RegistryBox from 'components/RegistryBox';
import './registry.css';

export default class Registry extends Component {
  render() {
    return (
      <div id='registry-page'>
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
    );
  }
}