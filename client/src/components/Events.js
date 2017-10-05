import React, { Component } from 'react';
import Event from 'components/Event';

import './events.css'

function handle_types(event) {
    if(event['multi-event'] === 1) {
        return <div className='event-container'>
                    { event.events.map((event) => <Event event={event} />) }
                </div>
    }
    else 
    {
        return <div className='event-container'>
                 <Event event={event} />
                </div>
    }

}

export default class Events extends Component {

    render() {
        return (
        <div className='events'>
                {
                    this.props.events.map((event) => handle_types(event))
                }
        </div>
        );
    }
}