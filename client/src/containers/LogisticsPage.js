import React, { Component } from 'react';
import mapboxgl from "mapbox-gl";
import './logistics.css'; 

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VubGV5YXJhaSIsImEiOiJjaXR5dzFwZmUwYTU4Mm9xbW9vNm1jYnI4In0.bCIRg12czhSo9veGgWa0Dw';

export default class Logistics extends Component {
    componentDidMount(prevProps, prevState) {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/kenleyarai/cj1wlslf0000u2snyb8ev7v3l',
        });
        map['dragPan'].disable();
        map['scrollZoom'].disable();
    }

    render() {
        return (
            <div id='map-page'>
                <div id='map'>
                    <div id='address-location'>
                        <div id='address-container'>
                            <h1>Address</h1>
                            <h2>1418 Descanso Dr</h2>
                            <h2>La Cañada Flintridge, CA 91011</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
