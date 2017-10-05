import React, { Component } from 'react';

import './event.css';

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default class Event extends Component {
  
  build_hours(hour) {
    return hour % 12
  }

  build_mins(mins) {
    if(mins >= 10) {
      return ":" + mins
    }
    return ""
  }

  build_end(hour){
    if (hour > 12){
      return " AM"
    }
    return " PM"
  }
  

  format_time(date) {
    return this.build_hours(date.getHours()) + this.build_mins(date.getMinutes()) + this.build_end(date.getHours)
  }

  render() {
    return (
      <div className='event'>
        <div className='event-title'>
            {this.props.event.title}
        </div>
        <div className='event-date'>
            {this.props.event.date.toLocaleDateString("en-US", options)}
        </div>
        <div className='time'>
            { this.format_time(this.props.event.date) }
        </div>
        <div className='event-body'>
          {this.props.event.body}
        </div>
        <div className='address'>
          {this.props.event.address}
        </div>
      </div>
    );
  }
}