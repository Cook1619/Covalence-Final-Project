import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import GOOGLE_SK from '../../../server/src/config/env/development'

const Map = (props) => {

    return (
        <React.Fragment>
            <GoogleMaps
                apiKey={''}
                style={{ height: "400px", width: "70%" }}
                zoom={15}
                center={{ lat: 44.5013, lng: -88.0622 }}
                markers={{ lat: 44.5013, lng: -88.0622 }} //optional
            />
        </React.Fragment>
    );
}

export default Map;