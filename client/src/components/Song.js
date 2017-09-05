import React from "react";
import "components/song.css";
import ApiTextArea from "components/ApiTextArea";

export default class Song extends React.Component {


    constructor(){
        super();

        this.state = { song_request: '' }

        this.song_update = this.song_update.bind(this);
        this.requests_song = this.requests_song.bind(this);
    }

    componentDidMount() {
        this.timer_groups = setInterval(
          () => this.requests_song(),
          1000
        );
      }

    requests_song() {
        const url = `/wants_to_hear/${this.props.userid}?song_request=${this.state.song_request}`
        const headers = {'Authorization': this.props.token };
        const request = new Request(url, {
            method: 'PUT',
            headers: headers
        });
    
        fetch(request)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    song_update(event) {
        this.setState({song_request: event.target.value})
    }

    render() {
        return (
            <div id="song">
                { 
                    this.props.group.map((group_member) => <ul className='song-and-allergy'>
                                                                <li>
                                                                    <ApiTextArea uri={'/wants_to_hear'} data={group_member} col={'song_request'} />
                                                                    <ApiTextArea uri={'/has_allergy'} data={group_member} col={'allergy'} />
                                                                </li>
                                                            </ul>)
                 }
            </div>
        );
    }
}
