import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import './datespage.css'; 
import events from './events';
import Events from 'components/Events';


import IronImg from 'components/IronImg';
import image from '../images/dates-preload.jpg';
import MediaQuery from 'react-responsive';
const hdHomePageURL = 'http://res.cloudinary.com/hknwrleem/image/upload/c_scale,w_1824/v1505072465/dates_aeenl9.jpg';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class DatesPage extends Component {
    render() {
        return (
            <div id='dates-page'>
                <MediaQuery minWidth={961}>
                    <IronImg srcPreload={image} srcLoaded={hdHomePageURL} />
                </MediaQuery>
                <Events events={events} />
            </div>
        );
    }
}