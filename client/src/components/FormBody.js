import React from "react";
import "./form-body.css";

import LoginState from "./LoginState";
import AttendingState from "./AttendingState";
import FoodState from "./FoodState";
import FinalQuestionsBody from "./FinalQuestionsBody";

export default class FormBody extends React.Component {

    group_helper(group) {
        return group.filter(function(member){
            return member.attending==='yes'
        })
    }

    form_state_helper(state) {
        switch(state) {
            case 'login':
                return <LoginState name_handler={this.props.name_handler} password_handler={this.props.password_handler} />;
            case 'attending':
                return <AttendingState attending_handler={ this.props.attending_handler } group={this.props.group}/>
            case 'food':
                return <FoodState group={this.group_helper(this.props.group)} food_handler={this.props.food_handler} />
            case 'final_questions':
                return <FinalQuestionsBody group={this.group_helper(this.props.group)} questions_handler={this.props.questions_handler} />
            case 'bye':
                return (
                    <div className="bye-container">
                        We are excited to see:
                        {
                            this.group_helper(this.props.group).map((member) => <div>{member.name}</div>)
                        }
                         on Oct 20th!
                    </div>
                );
            default:
                return <div>Error</div>;
        }
    }

    render() {
        return (
            <div id="form-body">
                { this.form_state_helper(this.props.tracker_state) }
            </div>
        );
    }
}
