import React from "react";
import "./food-footer.css";

import Button from "./Button";
import arrowImg from "images/arrow-alt-circle-right.svg";

export default class FoodFooter extends React.Component {
    render() {
        return (
            <div id="food-footer">
                <Button onc={ this.props.back_click } image={arrowImg} clickable={true} text="Logout"/>
                <Button onc={ this.props.next_click } image={arrowImg} clickable={true} text="Next Step"/>
            </div>
        );
    }
}
