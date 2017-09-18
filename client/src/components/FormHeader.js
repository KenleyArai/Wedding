import React from "react";
import "./form-header.css";

export default class FormHeader extends React.Component {

    header_helper(state) {
        switch(state) {
            case 'login':
                return "To RSVP, please login!";
            case 'attending':
                return "Can you let us know who is attending?";
            case 'food':
                return "Can you let us know what they would like to eat?";
            case 'final_questions':
                return "Last questions!";
            case 'bye':
                return "Thank you!";
            default:
                return "Error State!"

        }
    }

    render() {
        return (
              <div className='form-header form-text'>
                    { this.header_helper(this.props.tracker_state) }
              </div>
        );
    }
}
