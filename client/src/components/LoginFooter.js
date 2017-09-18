import React from "react";
import "./login-footer.css";

import Button from './Button';

import arrowImg from "images/arrow-alt-circle-right.svg";
import questionImg from "images/question-circle.svg";

export default class LoginFooter extends React.Component {

    render() {
        return ( <div id='login-footer'>
                    <Button onc={ this.props.login_click } image={arrowImg} clickable={true} text="Login"/>
                </div>
        );
    }
}
