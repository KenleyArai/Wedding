import React from "react";
import "./last-questions-footer.css";

import Button from "./Button";
import arrowImg from "images/arrow-alt-circle-right.svg";

export default class LastQuestionsFooter extends React.Component {
    render() {
        return (
            <div id="last-questions-footer">
                <Button onc={ this.props.back_click } image={''} clickable={true} text="Back"/>
                <Button onc={ this.props.next_click } image={arrowImg} clickable={true} text="Thank you!"/>
            </div>
        );
    }
}
