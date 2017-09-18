import React from "react";
import "./form-app.css";

import userImg from "images/user-circle.svg";
import lockImg from "images/lock-alt.svg";
import arrowImg from "images/arrow-alt-circle-right.svg";
import questionImg from "images/question-circle.svg";

import StateTracker from 'components/StateTracker';
import FormHeader from 'components/FormHeader';
import FormBody from 'components/FormBody';
import FormFooter from 'components/FormFooter';

export default class FormApp extends React.Component {

    constructor(props) {
        super(props);

        this.state =    {
                            user:undefined,
                            name: '',
                            password: '',
                            req: false,
                            auth_token: '',
                            status: '',
                            user_state:"login"
                        };

        this.login_click = this.login_click.bind(this);
        this.logout_click = this.logout_click.bind(this);
        this.food_click = this.food_click.bind(this);
        this.attending_click = this.attending_click.bind(this);
        this.finalQ_click = this.finalQ_click.bind(this);
        this.bye_click = this.bye_click.bind(this);
        this.name_handler = this.name_handler.bind(this);
        this.password_handler = this.password_handler.bind(this);
        this.attending_handler = this.attending_handler.bind(this);
        this.questions_handler = this.questions_handler.bind(this);
        this.food_handler = this.food_handler.bind(this);
        this.tick = this.tick.bind(this);
    }

    toTitleCase(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
            250
        );
      }

    tick() {
        if(this.state.user_state === 'login' && this.state.auth_token && this.state.user && this.state.group) {
            this.setState( { user_state: 'attending' } );
        }

        if(this.state.auth_token && this.state.user == undefined) {
            const url = `/search_for_guest?name=${this.toTitleCase(this.state.name).replace(' ', '%20')}`
      
            const headers = {'Authorization': this.state.auth_token };
            const request = new Request(url, {
              method: 'GET',
              headers: headers,
            });
      
            fetch(request)
            .then((resp) => resp.json())
            .then((data) => this.setState({ user: data[0] }))
        }
        if(this.state.auth_token && this.state.user) {
            const url = `/group/${this.state.user.gid.replace(' ', '%20')}`
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

    attending_handler(attendee_id, choice) {
        const url = `/attending/${attendee_id}?attending=${choice}`
        const headers = {'Authorization': this.state.auth_token };
        const request = new Request(url, {
            method: 'PUT',
            headers: headers
        });
    
        fetch(request)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    food_handler(attendee_id, type, choice) {
        if(type === 'entree') {
            const url = `/wants_for_dinner/${ attendee_id }?${type}=${choice}`
            const headers = {'Authorization': this.state.auth_token };
            const request = new Request(url, {
                method: 'PUT',
                headers: headers
            });
    
            fetch(request)
            .then((resp) => resp.json())
        }
        else if(type === 'dessert') {
            const url = `/wants_cake/${ attendee_id }?${type}=${choice}`
            const headers = {'Authorization': this.state.auth_token };
            const request = new Request(url, {
                method: 'PUT',
                headers: headers
            });
    
            fetch(request)
            .then((resp) => resp.json())
        }
    }

    questions_handler(attendee_id, type, resp) {
        if( type === 'allergy'){
            const url = `/has_allergy/${attendee_id}?allergy='${resp}'`
            const headers = {'Authorization': this.state.auth_token };
            const request = new Request(url, {
                method: 'PUT',
                headers: headers
            });
            
            
            fetch(request)
            .then((resp) => resp.json())
        } else if( type === 'song_request') {
            const url = `/wants_to_hear/${attendee_id}?song_request='${resp}'`
            const headers = {'Authorization': this.state.auth_token };
            const request = new Request(url, {
                method: 'PUT',
                headers: headers
            });
            
            
            fetch(request)
            .then((resp) => resp.json())
        }
    }

    name_handler(event) {
        this.setState({name: event.target.value})
    }

    password_handler(event) {
        this.setState({password: event.target.value})
    }

    login_click() {
        const credentials = {
            name: this.state.name,
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
            .then(() => this.setState({req: false}));
    }

    food_click() {
        this.setState({user_state:"food"});
    }

    logout_click() {
        this.setState({user_state:"login"});
    }

    attending_click () {
        this.setState({user_state:"attending"});
    }

    finalQ_click() {
        this.setState({user_state:"final_questions"});
    }
    bye_click() {
        this.setState({user_state:"bye"});
    }
    render() {
        return (
            <div id="form-app">
              <StateTracker tracker_state={this.state.user_state} />
              <div id='form-state-container'>
                <FormHeader tracker_state={this.state.user_state} />
                <FormBody name_handler={ this.name_handler } questions_handler={this.questions_handler} password_handler={ this.password_handler } tracker_state={this.state.user_state} attending_handler={this.attending_handler} food_handler={this.food_handler} group={this.state.group} />
              </div>
              <FormFooter bye_click={this.bye_click} attending_click={ this.attending_click } finalQ_click={this.finalQ_click} logic_click={this.login_click} food_click={ this.food_click } logout_click={ this.logout_click } tracker_state={this.state.user_state} />
            </div>
        );
    }
}
