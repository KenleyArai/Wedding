import React from "react";
import "./login-state.css";

import userImg from "images/user-circle.svg";
import lockImg from "images/lock-alt.svg";
import arrowImg from "images/arrow-alt-circle-right.svg";
import questionImg from "images/question-circle.svg";

export default class LoginState extends React.Component {


    render() {
        return (
            <div id="login-state">
                <div id="fullname">
                    <div className='login-label'>
                    Fullname:
                    </div>
                    <div className='form-input'>
                    <div className='sider'><img src={userImg} /></div><input onChange={ this.props.name_handler } className='fm' type='text' />
                    </div>
                    <div className='login-helper'>
                        <img src={questionImg} /> Such as "Kathy Arai"
                    </div>
                </div>
                <div id="password">
                    <div className='login-label'>
                    Password:
                    </div>
                    <div className='form-input'>
                    <div className='sider'><img src={lockImg} /></div><input onChange={ this.props.password_handler } className='fm' type='text' />
                    </div>
                    <div className='login-helper'>
                        <img src={questionImg} /> Your password is on your invitation!
                    </div>
                    <div className='login-helper-child'>
                        <img src={questionImg} /> If you are having issue feel free to email lena.press@gmail.com or me@kenleyarai.com
                    </div>
                </div>
            </div>
        );
    }
}
