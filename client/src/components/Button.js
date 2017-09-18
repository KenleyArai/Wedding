import React from "react";
import "./button.css";

export default class Button extends React.Component {
    render() {
        return (
            <button onClick={ this.props.onc } className={ this.props.clickable ? 'form-button btn' : 'form-button'}>
                <img className='button-image' src={ this.props.image } /> 
                <span className='button-text'>{this.props.text}</span>
            </button>
        );
    }
}
