import React from "react";
import "./final-questions-body.css";

export default class FinalQuestionsBody extends React.Component {
    render() {
        return (
            <div id="final-questions-body">
                <div id="lq-container">
                    {
                        this.props.group.map(
                            (attendee) =>  (
                                <div className="lq-box">
                                    <div className="lq-name">
                                        Does { attendee.name }...
                                    </div>
                                    <div className="lq-body">
                                        <div className="allergies">
                                            Allergies?
                                        </div>
                                        <input placeholder={attendee.allergy} onChange={(e) => this.props.questions_handler(attendee.id, 'allergy', e.target.value) } className="allergies-input" type="text" />
                                        <div className="song-request">
                                            A song request?
                                        </div>
                                        <input placeholder={attendee.song_request} className="sq-input" type="text" />
                                    </div>
                                </div>)
                        )
                    }
                </div>
            </div>
        );
    }
}
