import React from "react";
import "./form-footer.css";

import LoginFooter from './LoginFooter';
import AttendingFooter from './AttendingFooter';
import FoodFooter from './FoodFooter';
import LastQuestionsFooter from './LastQuestionsFooter';

export default class FormFooter extends React.Component {

    form_state_helper(state) {
        switch(state) {
            case 'login':
                return <LoginFooter login_click={this.props.logic_click} />;
            case 'attending':
                return <AttendingFooter next_click={ this.props.food_click } back_click={ this.props.logout_click } />;
            case 'food':
                return <FoodFooter next_click={ this.props.finalQ_click } back_click={ this.props.attending_click } />;
            case 'final_questions':
                return <LastQuestionsFooter next_click={ this.props.bye_click } back_click={this.props.food_click} />;
            case 'bye':
                return (<div className="bye-footer">
                            In the mean time check out our registry!
                       </div>);
            default:
                return <div>Error</div>;
        }
    }

    render() {
        return (
            <div className='form-footer'>
                { this.form_state_helper(this.props.tracker_state) }
            </div>
        );
    }
}
