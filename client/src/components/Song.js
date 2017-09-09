import React from "react";
import "components/song.css";
import ApiTextArea from "components/ApiTextArea";

export default class Song extends React.Component {

    render() {
        return (
            <div id="song">
                { 
                    this.props.group.map((group_member) => <div className='song-and-allergy'>
                                                                    <div className='sa-headers'>{group_member.name}</div>
                                                                    <ApiTextArea
                                                                        token={this.props.token} 
                                                                        uri={'/wants_to_hear/'} 
                                                                        col={'song_request'} 
                                                                        inputType={'text'}
                                                                        userid={ group_member.id }
                                                                        title={ '' }
                                                                        name={ group_member.name }
                                                                        content={ group_member.song_request}
                                                                        placeholder={ group_member.song_request } />
                                                                    <ApiTextArea 
                                                                        token={this.props.token}
                                                                        uri={'/has_allergy/'}
                                                                        col={'allergy'} 
                                                                        inputType={'text'}
                                                                        userid={ group_member.id }
                                                                        title={ '' }
                                                                        name={ group_member.name }
                                                                        content={ group_member.allergy }
                                                                        placeholder={ group_member.allergy }/>
                                                            </div>)
                 }
            </div>
        );
    }
}