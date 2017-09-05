import React from "react";
import TextArea from "components/TextArea";

export default class ApiTextArea extends React.Component {
    render() {
        return (
            <div id="ApiTextArea">
                <TextArea
                    inputType={'text'}
                    title={''}
                    name={''}
                    controlFunc={() => {} }
                    content={''}
                    placeholder={''} />
            </div>
        );
    }
}
