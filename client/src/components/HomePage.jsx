import React from 'react';
import background from './img/baseball.png'

const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div className="jumbotron m-3">
                    <h1>Welcome to the Strike Zone</h1>
                    <p>The place to come for all your baseball betting needs</p>
                </div>
            </div>
            <img className="m-5 img-responsive" src={background} alt="baseball" />
        </div>
    )
}

export default HomePage;