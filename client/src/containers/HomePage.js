import React from "react";
import MediaQuery from 'react-responsive';
import Announcement from 'components/Announcement';

import './homepage.css';

import IronImg from 'components/IronImg';
import image from '../images/home-preload.jpg';

const hdHomePageURL = 'http://res.cloudinary.com/hknwrleem/image/upload/c_scale,w_1824/v1505070063/home_jgoybe.jpg';

export default class HomePage extends React.Component {
    
    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div id='home-page'>
                <IronImg srcPreload={image} srcLoaded={hdHomePageURL} />
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
