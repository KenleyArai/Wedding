import React, { Component } from 'react';
import TwoOptions from 'components/TwoOptions';

import './foodpicker.css';

export default class FoodPicker extends Component {
  render() {
    return (
      <div id='food-picker'>
        <div id='food-picker-header'>Can you let us know what the guests would like to eat?</div>
          <div id='food-container'>
        { this.props.group.map( member => member.attending == 'yes' ? <div className='food-box'>
                                            <em className='food-header'>{member.name.split(" ")[0]}</em>
                                            <TwoOptions memid={member.id} chosen={member.entree} type={'?entree='} uri={'wants_for_dinner'} op1={'Steak'} op2={'Salmon'} token={this.props.token} />
                                            <TwoOptions memid={member.id} chosen={member.dessert} type={'?dessert='} uri={'wants_cake'} op1={'Carrot Cake'} op2={'Chocolate Cake'} token={this.props.token} />
                                          </div>: null ) }
          <div className='info'><i className="fa fa-question-circle" aria-hidden="true"></i> Kids don't have a choice!</div>
        </div>
      </div>
    );
  }
}
