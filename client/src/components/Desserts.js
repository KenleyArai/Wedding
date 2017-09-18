import React from "react";
import "./desserts.css";

export default class Desserts extends React.Component {

    des_helper(des) {
        switch(des){
            case 'carrot':
                return 'des-slider up';
            case 'chocolate':
                return 'des-slider up-right';
            case 'lemon-lime':
                return 'des-slider right';
            case '7-layer':
                return 'des-slider org';
            default:
                return 'des-slider'
        }
    }

    render() {
        return (
            <div className="desserts">
                <div className="des-choices">
                    <div className="des-btn" onClick={() => this.props.food_handler(this.props.antendee_id, 'dessert', 'carrot')} >
                        Carrot Cake
                    </div>
                    <div className="des-btn" onClick={() => this.props.food_handler(this.props.antendee_id, 'dessert', 'chocolate')}>
                        Chocolate Cake
                    </div>
                    <div className="des-btn" onClick={() => this.props.food_handler(this.props.antendee_id, 'dessert', '7-layer')}>
                        7 Layer Cake
                    </div>
                    <div className="des-btn" onClick={() => this.props.food_handler(this.props.antendee_id, 'dessert', 'lemon-lime')}>
                        Lemon Lime Cake
                    </div>
                </div>
                <div className={ this.des_helper(this.props.dessert) } >
                    <svg width="2rem" fill='#45D94F' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                </div>
            </div>
        );
    }
}
