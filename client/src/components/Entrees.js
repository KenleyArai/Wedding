import React from "react";
import "./entrees.css";

export default class Entrees extends React.Component {

    slider_helper(entree) {
        switch(entree) {
            case 'steak':
                return "entree-slider steak-pick";
            case 'salmon':
                return "entree-slider salmon-pick";
            default:
                return 'entree-slider'
        }
    }

    render() {
        return (
            <div className="entrees">
                <div className="entree-buttons">
                    <button onClick={() => this.props.food_handler(this.props.antendee_id, 'entree', 'steak')} className="steak">
                        Steak
                    </button>
                    <button onClick={() => this.props.food_handler(this.props.antendee_id, 'entree', 'salmon')} className="salmon">
                        Salmon
                    </button>
                </div>
                <div className={ this.slider_helper(this.props.entree) }>
                    <svg width="2rem" fill='#45D94F' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                </div>
            </div>
        );
    }
}
