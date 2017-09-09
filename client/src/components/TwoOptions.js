import React, { Component } from 'react';

import './twooptions.css'

export default class TwoOptions extends Component {
    constructor() {
        super();

        this.picked_one = this.picked_one.bind(this);
        this.picked_two = this.picked_two.bind(this);
        this.pick_gen = this.pick_gen.bind(this);
    }

    picked_one(memid, op1) {
        const url = `/${this.props.uri}/${ memid }${this.props.type}${op1}`
        const headers = {'Authorization': this.props.token };
        const request = new Request(url, {
            method: 'PUT',
            headers: headers
        });

        fetch(request)
        .then((resp) => resp.json())
    }

    picked_two(memid, op2) {
        const url = `/${this.props.uri}/${ memid }${this.props.type}${op2}`
        const headers = {'Authorization': this.props.token };
        const request = new Request(url, {
            method: 'PUT',
            headers: headers
        });

        fetch(request)
        .then((resp) => resp.json())
    }

    op1_class_gen() {
        if(this.props.op1 == this.props.chosen) {
            return 'two-cell ' + this.props.op1 + ' active';
        } else if(this.props.op2 == this.props.chosen) {
            return 'two-cell ' + this.props.op1+ ' not-active';
        } else {
            return 'two-cell ' + this.props.op1;
        }
    }

    op2_class_gen() {
        if(this.props.op2 == this.props.chosen) {
            return 'two-cell ' + this.props.op2 + ' active';
        } else if(this.props.op1 == this.props.chosen) {
            return 'two-cell ' + this.props.op2+ ' not-active';
        } else {
            return 'two-cell ' + this.props.op2;
        }
    }

    pick_gen() {
        if(this.props.chosen == 'Carrot Cake') {
            return <i className="fa fa-arrow-up" aria-hidden="true"></i>
        }
        if(this.props.chosen == 'Salmon') {
            return <i className="fa fa-arrow-down" aria-hidden="true"></i>
        }
        if(this.props.chosen == 'Chocolate Cake') {
            return <i className="fa fa-arrow-down" aria-hidden="true"></i>
        }
        if(this.props.chosen == 'Steak') {
            return <i className="fa fa-arrow-up" aria-hidden="true"></i>
        }
    }



    render() {
        return (
            <div className='two-options'>
                <div className={this.op1_class_gen()} onClick={() => this.picked_one(this.props.memid, this.props.op1) } >
                    {this.props.op1}
                </div>
                <div className='two-cell-center'>
                    { this.props.chosen ? this.pick_gen() : 'or' }
                </div> 
                <div className={this.op2_class_gen()} onClick={() => this.picked_two(this.props.memid, this.props.op2) } >
                    {this.props.op2}
                </div>
            </div>
        );
    }
}
