import React, { Component } from 'react';
import FoodPicker from 'components/FoodPicker';
import SingleInput from 'components/SingleInput';
import AttendingList from 'components/AttendingList';
import Song from 'components/Song';
import asyncPoll from 'react-async-poll';
import './rsvpform.css';

export default class RsvpForm extends Component {

  constructor() {
      super();
      this.state = { auth_token: '', name: '', password: '', song_state: false, invitee: undefined, is_correct_party: 0, food_choices: false, done: false, go_next:false, group:false};

      this.nameChange = this.nameChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.get_invitee_helper = this.get_invitee_helper.bind(this);
      this.form = this.form.bind(this);
      this.notPartyOnClick = this.notPartyOnClick.bind(this);
      this.isPartyOnClick = this.isPartyOnClick.bind(this);
      this.party = this.party.bind(this);
      this.attending = this.attending.bind(this);
      this.attending_helper = this.attending_helper.bind(this);
      this.food_pick = this.food_pick.bind(this);
      this.all_done = this.all_done.bind(this);
      this.okay_next = this.okay_next.bind(this);
      
  }

  toTitleCase(str)
  {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.get_guest(),
      1000
    );

    this.timer_groups = setInterval(
      () => this.get_group(),
      1000
    );
  }

  get_group() {
    if(this.state.auth_token && this.state.invitee != undefined) {
      const url = `/group/${this.state.invitee.gid.replace(' ', '%20')}`
      const headers = {'Authorization': this.state.auth_token };
      const request = new Request(url, {
        method: 'GET',
        headers: headers,
      });

      fetch(request)
      .then((resp) => resp.json())
      .then((data) => this.setState({ group: data.sort() }))
    }
  }

  get_guest() {
    if(this.state.auth_token && this.state.invitee == undefined) {
      const url = `/search_for_guest?name=${this.toTitleCase(this.state.name).replace(' ', '%20')}`

      const headers = {'Authorization': this.state.auth_token };
      const request = new Request(url, {
        method: 'GET',
        headers: headers,
      });

      fetch(request)
      .then((resp) => resp.json())
      .then((data) => this.setState({ invitee: data[0] }))
    }
  }

  // Handlers
  get_invitee_helper(invitee) {
    return invitee['invitees'][0] // TODO: Figure out how to properly get json object without using 0 index
  }

  handleSubmit(event){
        const credentials = {
          name: this.toTitleCase(this.state.name),
          password: this.state.password
        }
        
        const request = new Request('/auth/login', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }), 
          body: JSON.stringify(credentials)
        });

        fetch(request)
        .then((resp) => resp.json())
        .then((data) => this.setState((prevState, props) => ({ auth_token: data['auth_token']})))

        event.preventDefault();
  }

  nameChange(event) {
    this.setState({name: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value.toUpperCase()});
  }

    notPartyOnClick(event) {
      this.setState({ auth_token: '', name: '', password: '', invitee: undefined, is_correct_party: 0, food_choices: false, done: false, go_next:false, group:false})
    }
  
  isPartyOnClick(event) {
      this.setState({is_correct_party: 1})
  }
  
  // Functions that render each state
  form() {
    return !this.state.invitee ? (
      <div id='initial-form'>
        <em className='headers'>Welcome, please enter your name!</em>
        <SingleInput
            inputType={'text'}
            title={''}
            name={'field1'}
            controlFunc={this.nameChange}
            content={this.state.name}
            placeholder={'Name...'} />
        <SingleInput
            inputType={'text'}
            title={''}
            name={'field2'}
            controlFunc={this.passwordChange}
            content={this.state.password}
            placeholder={'Password...'} />
        <input type="submit" value="Submit" />
      </div>
    ) 
    : null
  }

  party() {
    return this.state.group && !this.state.is_correct_party && !this.state.food_choices && !this.state.song_state ? (
      <div id='party-check'>
        <em className='headers'>Is this your party?</em>
        <ul id='party'>
          { this.state.group.map((group_member) => { return <li>{group_member.name}</li> }) }
        </ul>
        <span id='not-them' className='button-check' onClick={this.notPartyOnClick}>Nope, not my party!!</span>
        <span id='them' className='button-check' onClick={this.isPartyOnClick}>Yup that's them!</span>
      </div>
    )
    :
    null
  }
  
  attending_helper() {
    this.setState({is_correct_party: false, food_choices: true})
  }

  attending() {
    return this.state.is_correct_party && !this.state.food_choices ? (
      <div id='attending-check'>
        <em className='headers'>Can you let us know who is attending?</em>
        <AttendingList party={ this.state.group } userid={this.state.invitee.id} token={ this.state.auth_token }/>
        <div id='next' onClick={this.attending_helper}>Next</div>
      </div>
    ) : null;
  }

  food_pick() {
    return this.state.food_choices ? 
                <span>
                  <FoodPicker token={this.state.auth_token} group={this.state.group.filter(function(member) {return member.is_kid === 'no'})} /> 
                  <div onClick={this.all_done} id='done'>
                    Click here to finish!
                  </div>
                </span> : null
  }

  okay_next() {
    this.setState({food_choices: false, song_state: true})
  }

  all_done() {
    this.setState({food_choices: false, invitee: null, group: null, done: true, auth_token: undefined})
  }

  song_state() {
    return this.state.song_state ? 
                <Song token={this.state.auth_token} group={ this.state.group }/>
              : null
  }

  render() {
    return (
      <form id='rsvp-form' onSubmit={this.handleSubmit}>
        { this.form() }
        { this.party() }
        { this.attending() }
        { this.food_pick() }
      </form>
    );
  }
}
