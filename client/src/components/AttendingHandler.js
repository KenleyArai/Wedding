import React from "react";
import "./attending-handler.css";

import QuestionCircle from "images/question-circle.svg";
import checkImg from "images/calendar-check.svg";
import exImg from "images/calendar-times.svg";
export default class AttendingHandler extends React.Component {
    render() {
        return (
            <div className="attending-handler">
                <div className="attending">
                    <button onClick={ () => this.props.attending_handler(this.props.att_id, "yes")  } className="attending-button btn">Can<br />attend!</button>
                </div>
                <div className="not-attending">
                    <button onClick={ () => this.props.attending_handler(this.props.att_id, "no") } className="not-attending-button btn">Cannot<br />attend!</button>
                </div>
                <span className={this.props.attending === 'yes' || this.props.attending === 'no' ? "attending-slider " + this.props.attending: 'attending-slider' }>
                    {
                        this.props.attending === 'yes' ? <img className={'shadow'} src={checkImg} />: <img className={'shadow'} src={exImg} />
                    }
                </span>
            </div>
        );
    }
}
