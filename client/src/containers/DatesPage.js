import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import './datespage.css'; 
import events from './events';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class DatesPage extends Component {
    render() {
        return (
            <div id='dates-page'>
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
        );
    }
}