import React from 'react';

const Footer = () => {
    return(
        <div>   
            <nav>
                <img src="https://www.logolynx.com/images/logolynx/f0/f009386dc544d1455db05db19d454629.png" width="100px" alt="" />
                <button className="btn btn-outline-light border-0 rounded-0" to="/">Home</button>
                <button className="btn btn-outline-light border-0 rounded-0" to="/games">Games</button>
                <button className="btn btn-outline-light border-0 rounded-0" to="/">Pricing</button>
                <button className="btn btn-outline-light border-0 rounded-0" to="/">How It Works</button>
                <button className="btn btn-outline-light border-0 rounded-0" to="/contact">Contact</button>
                <button className="btn btn-dark rounded-0 btn-sml" to="/">Sign Up!</button>
            </nav>
        </div>
    )
}

export default Footer;