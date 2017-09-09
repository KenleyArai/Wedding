import React from "react";
import TextArea from "components/TextArea";

export default class ApiTextArea extends React.Component {
    
   
    constructor(){
        super();

        this.state = { content: undefined }

        this.api_call = this.api_call.bind(this);
        this.text_update = this.text_update.bind(this);
    }

    api_call() {
        const url = `${this.props.uri}${this.props.userid}?${this.props.col}=${this.state.content}`
        const headers = {'Authorization': this.props.token };
        const request = new Request(url, {
            method: 'PUT',
            headers: headers
        });
        
        
        fetch(request)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    text_update(event) {
        this.setState({content: event.target.value});
        this.api_call();
    }

   
    render() {
        return (
            <div className="ApiTextArea">
                <TextArea
                    inputType={this.props.inputType}
                    title={ this.props.title }
                    name={ this.props.name }
                    controlFunc={ this.text_update }
                    content={ this.state.content != undefined ?  this.state.content : this.props.content }
                    placeholder={ this.props.placeholder } />
            </div>
        );
    }
}