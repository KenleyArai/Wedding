import React from "react";
import MediaQuery from 'react-responsive';
import Announcement from 'components/Announcement';

import './homepage.css';

export default class HomePage extends React.Component {
    render() {
        return (
            <div id='home-page'>
                <MediaQuery maxWidth={960}>
                    <Announcement ann={<span>K &amp; L</span>} />
                </MediaQuery>
                <MediaQuery minWidth={961}>
                    <Announcement ann={<span>Kenley &amp; Lena</span>} />
                </MediaQuery>
          </div>
        );
    }
}
