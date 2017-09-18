import React from "react";
import "./attending-footer.css";

import Button from "./Button";
import arrowImg from "images/arrow-alt-circle-right.svg";

export default class AttendingFooter extends React.Component {
    render() {
        return (
            <div id="attending-footer">
                    <Button onc={ this.props.back_click } image={''} clickable={true} text="Logout"/>
                    <Button onc={ this.props.next_click } image={arrowImg} clickable={true} text="Next Step"/>
            </div>
        );
    }
}
