import React from "react";
import "./food-state.css";

import Entrees from "./Entrees";
import Desserts from "./Desserts";
export default class Food extends React.Component {
    render() {
        return (
            <div id="food-state-container">
                {
                    this.props.group.map(
                        (attendee) =>  ( attendee.is_kid === 'no' ? <div className="food-box">
                                            <div className="food-name">
                                                { attendee.name }
                                            </div>
                                            <Entrees  food_handler={ this.props.food_handler } antendee_id={attendee.id} entree={ attendee.entree } />
                                            <Desserts food_handler={ this.props.food_handler } antendee_id={attendee.id} dessert={ attendee.dessert } />
                                         </div> : null)
                    )
                }
            </div>
        );
    }
}
