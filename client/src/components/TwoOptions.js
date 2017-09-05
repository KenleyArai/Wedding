import React, { Component } from 'react';

import './twooptions.css'

export default class TwoOptions extends Component {
    constructor() {
        super();

        this.picked_one = this.picked_one.bind(this);
        this.picked_two = this.picked_two.bind(this);
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
        .then((data) => console.log(data))
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
        .then((data) => console.log(data))
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



    render() {
        return (
            <div className='two-options'>
                <table className='two-table'>
                    <tr className='two-row'>
                        <td className={this.op1_class_gen()} onClick={() => this.picked_one(this.props.memid, this.props.op1) } >
                            {this.props.op1}
                        </td>
                        <td className='two-cell'>
                            or
                        </td> 
                        <td className={this.op2_class_gen()} onClick={() => this.picked_two(this.props.memid, this.props.op2) } >
                            {this.props.op2}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
