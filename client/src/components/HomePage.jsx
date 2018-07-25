import React from 'react';
import background from './img/homepage.png'
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <img className="img-responsive w-100" src={background} alt="baseball" />
            <Footer />
        </div>
    )
}

export default HomePage;