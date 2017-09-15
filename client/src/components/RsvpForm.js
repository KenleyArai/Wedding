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
      this.state = { req: false, attending_state: true, auth_token: '', name: '', password: '', song_state: false, invitee: undefined, is_correct_party: 0, food_choices: false, done: false, go_next:false, group:false};

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
    var clock = 0
    this.timerID = setInterval(
      () => this.get_guest(clock++, 9000),
      210
    );
  }

  get_guest(interval, session_end) {
 
    if(!(interval % session_end)){
      this.all_done
    }

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
        this.setState({req: true});
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
        .then((resp) => resp.ok ? resp.json() : { auth_token: undefined, status: 'rejected' })
        .then((data) => this.setState((prevState, props) => ({ auth_token: data['auth_token'], status: data['status']})))
        .then(() => this.setState({req: false}))

        event.preventDefault();
  }

  nameChange(event) {
    this.setState({name: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value.toUpperCase()});
  }

    notPartyOnClick(event) {
      this.setState({ group:undefined, auth_token: '', name: '', password: '', invitee: undefined, is_correct_party: 0, food_choices: false, done: false, go_next:false, group:false})
    }
  
  isPartyOnClick(event) {
      this.setState({is_correct_party: 1})
  }
  
  // Functions that render each state
  form() {
    return !this.state.invitee ? (
      <div id='initial-form'>
        <em className='headers'>Hi, to RSVP please login!</em>
        <SingleInput
            inputType={'text'}
            title={ this.state.status ? <div>Fullname <div className='error'><i className="fa fa-exclamation" aria-hidden="true"></i>: Either your name or password was not recognized! Double check the code on the invitation you got in the mail please!</div></div>: 'Fullname'}
            name={'name-input'}
            controlFunc={this.nameChange}
            content={this.state.name}
            placeholder={'...'} />
        <SingleInput
            inputType={'text'}
            title={'Password'}
            name={'pass-input'}
            controlFunc={this.passwordChange}
            content={this.state.password}
            placeholder={'...'} />
            <div id='login-helper'><i className="fa fa-question-circle" aria-hidden="true"></i>Your passcode is on your invitation!</div>
        <button id='submit' className='bnext' type="submit" value="Submit">
              { this.state.req ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>  : <span>Submit <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></span> }
          </button>
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
    return this.state.group && this.state.attending_state && !this.state.food_choices ? (
      <div id='attending-check'>
        <em className='headers'>Can you let us know who is attending?</em>
        <AttendingList party={ this.state.group } userid={this.state.invitee.id} token={ this.state.auth_token }/>
        <div className='bnext' onClick={this.attending_helper}>Next <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
      </div>
    ) : null;
  }

  food_pick() {
    return this.state.food_choices ? 
                <span>
                  <FoodPicker token={this.state.auth_token} group={this.state.group.filter(function(member) {return member.is_kid === 'no'})} /> 
                  <div className='bnext' onClick={this.okay_next} id='done'>
                    Click here! Only one more step! <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  </div>
                </span> : null
  }

  okay_next() {
    this.setState({ attending_state:false, food_choices: false, song_state: true})
  }

  all_done() {
    this.setState({attending_state:false,song_state:false, food_choices: false, invitee: null, group: null, done: true, auth_token: undefined, attending_state:true})
  }

  song_state() {
    return this.state.song_state && !this.state.attending_state ? 
                <div id='song-box'>
                  <div className='headers-song'>Last question! can you tell us if...</div>
                  <Song userid={this.state.invitee.id} token={this.state.auth_token} group={ this.state.group }/>
                  <div onClick={this.all_done} id='done'>
                      Click here to finish! <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  </div>
                </div>
              : null
  }

  render() {
    return (
      <form id='rsvp-form' onSubmit={this.handleSubmit}>
        { this.form() }
        { this.attending() }
        { this.food_pick() }
        { this.song_state() }
      </form>
    );
  }
}