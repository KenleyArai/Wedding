import React from "react";
import "./state-tracker.css";

export default class StateTracker extends React.Component {

    render() {
        return (
            <div id="state-tracker">
                <div className={ this.props.tracker_state === 'login' ? 'form-state active-state' : 'form-state' } />
                <div className={ this.props.tracker_state === 'attending' ? 'form-state active-state' : 'form-state' } />
                <div className={ this.props.tracker_state === 'food' ? 'form-state active-state' : 'form-state' } />
                <div className={ this.props.tracker_state === 'final_questions' ? 'form-state active-state' : 'form-state' } />
                <div className={ this.props.tracker_state === 'bye' ? 'form-state active-state' : 'form-state' } />
            </div>
        );
    }
}
