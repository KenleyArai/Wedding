import React from "react";
import "components/song.css";
import ApiTextArea from "components/ApiTextArea";

export default class Song extends React.Component {

    render() {
        return (
            <div id="song">
                { 
                    this.props.group.map((group_member) => <ul className='song-and-allergy'>
                                                                <li>
                                                                    <ApiTextArea
                                                                        token={this.props.token} 
                                                                        uri={'/wants_to_hear/'} 
                                                                        col={'song_request'} 
                                                                        inputType={'text'}
                                                                        userid={ group_member.id }
                                                                        title={ group_member.name }
                                                                        name={ group_member.name }
                                                                        content={ group_member.song_request}
                                                                        placeholder={ group_member.song_request } />
                                                                    <ApiTextArea 
                                                                        token={this.props.token}
                                                                        uri={'/has_allergy/'}
                                                                        col={'allergy'} 
                                                                        inputType={'text'}
                                                                        userid={ group_member.id }
                                                                        title={ group_member.name }
                                                                        name={ group_member.name }
                                                                        content={ group_member.allergy }
                                                                        placeholder={ group_member.allergy }/>
                                                                </li>
                                                            </ul>)
                 }
            </div>
        );
    }
}