import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import { config } from '../../../server/src/config';

const Map = (props) => {

    return (
        <React.Fragment>
            <GoogleMaps
                apiKey={config.GOOGLE_SK}
                style={{ height: "400px", width: "70%" }}
                zoom={15}
                center={{ lat: 44.5013, lng: -88.0622 }}
                markers={{ lat: 44.5013, lng: -88.0622 }} //optional
            />
        </React.Fragment>
    );
}

export default Map;