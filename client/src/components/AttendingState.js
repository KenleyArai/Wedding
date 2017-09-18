import React from "react";
import "./attending-state.css";

import AttendingHandler from './AttendingHandler';

export default class AttendingState extends React.Component {
    
    handler_attendee(attendee) {
        return (
            <div className="att-box">
                <span className="att-name">{attendee.name}</span>
                <AttendingHandler attending={attendee.attending} current_status={ attendee.attending } att_id={attendee.id} attending_handler={ this.props.attending_handler } />
            </div>
        );
    }

    render() {
        return (
            <div id="attending-state">
                {
                    this.props.group.map(
                        (attendee) =>
                            this.handler_attendee(attendee)
                    )
                }
            </div>
        );
    }
}
