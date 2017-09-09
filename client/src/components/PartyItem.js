import React from "react";

import 'partyitem.css';

export default class PartyItem extends React.Component {

    constructor() {
        super();

        this.state = { initial_state: true}

        this.isAttending = this.isAttending.bind(this);
        this.isNotAttending = this.isNotAttending.bind(this);
    }


    isAttending() {
        console.log('test')
        const url = `/attending/${this.props.userid}?attending=yes`
        const headers = {'Authorization': this.props.token };
        const request = new Request(url, {
            method: 'PUT',
            headers: headers
        });
    
        fetch(request)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    isNotAttending() {

        const url = `/attending/${this.props.userid}?attending=no`
        const headers = {'Authorization': this.props.token };
        const request = new Request(url, {
            method: 'PUT',
            headers: headers
        });
    
        fetch(request)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    going_or_not_going_end(){
        if(this.props.going == 'unknown'){
            return <i className="fa fa-question-circle" aria-hidden="true"></i>
        }
        return this.props.going == 'yes' ? <i className="fa fa-birthday-cake going"></i> : <i className="fa fa-ban not-going"></i>
    }

    render() {
        return (
            <div className='party-item'>
                <div>
                    { this.props.going == 'yes' || this.props.going == 'no' || this.props.going == 'unknown' ? this.going_or_not_going_end() : <i className="fa fa-spinner fa-spin fa-3x fa-fw" aria-hidden="true"></i>  }
                </div>
                <div className={'party-item-header'} >
                    { this.props.name } 
                </div>
                <div    className='button-attend not-going' 
                        onClick={() => this.isNotAttending()}
                        >No</div>
                <div    className='button-attend going' 
                        onClick={() => this.isAttending()}
                        >Yes</div>
            </div>
        );
    }
}
