import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import './datespage.css'; 
import events from './events';


import IronImg from 'components/IronImg';
import image from '../images/dates-preload.jpg';

const hdHomePageURL = 'http://res.cloudinary.com/hknwrleem/image/upload/c_scale,w_1824/v1505072465/dates_aeenl9.jpg';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class DatesPage extends Component {
    render() {
        return (
            <div id='dates-page'>
                <IronImg srcPreload={image} srcLoaded={hdHomePageURL} />
                <div id='dates-container'>
                    <div id='calendar-month'>October</div>
                    <div id='calendar-container'>
                        <BigCalendar
                            {...this.props}
                            events={events}
                            defaultDate={new Date(2017, 9,20)}
                            selectable={'ignoreEvents'}
                            toolbar={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}