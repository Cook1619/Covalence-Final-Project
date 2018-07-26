import React from 'react';
import background from './img/homepage.png'


const HomePage = () => {
    return (
        <React.Fragment>
            <img id="homepage" className="img-fluid" src={background} alt="baseball" />
        </React.Fragment>
    )
}

export default HomePage;