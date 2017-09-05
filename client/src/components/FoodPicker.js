import React, { Component } from 'react';
import TwoOptions from 'components/TwoOptions';

import './foodpicker.css';

export default class FoodPicker extends Component {
  render() {
    return (
      <div id='food-picker'>
        { this.props.group.map( member => <div className='food-box'>
                                            <em className='food-header'>What would {member.name.split(" ")[0]} prefer to eat?</em>
                                            <TwoOptions memid={member.id} chosen={member.entree} type={'?entree='} uri={'wants_for_dinner'} op1={'Steak'} op2={'Salmon'} token={this.props.token} />
                                            <TwoOptions memid={member.id} chosen={member.dessert} type={'?dessert='} uri={'wants_cake'} op1={'Carrot Cake'} op2={'Chocolate Cake'} token={this.props.token} />
                                          </div> ) }
      </div>
    );
  }
}
