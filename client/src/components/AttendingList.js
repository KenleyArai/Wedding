import React from "react";
import PartyItem from 'components/PartyItem';
import './attendinglist.css';

export default class AttendingList extends React.Component {
    render() {
        return (
            <div id='attending'>
                { this.props.party.sort().map((group_member) => { 
                    return <PartyItem 
                                name={group_member.name + ' '} 
                                attending={group_member.attending}
                                userid={group_member.id}
                                token={this.props.token}
                                going={group_member.attending}
                            />
                    })
                }
            </div>
        );
    }
}
