import React from 'react';
import Footer from './Footer';
import Rodgers from './img/rodgers.png'

const About = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="img-circle">
                        <a href="https://github.com/Cook1619" target="_blank">
                            <img src={Rodgers} alt="Some text" />
                        </a>
                            <div className="caption">
                                <p className="text-white">Matt Cook</p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="img-circle">
                        <a href="https://github.com/percussion1313" target="_blank">
                            <img src={Rodgers} alt="Some text" />
                        </a>
                        <div className="caption">
                            <p className="text-white">Peter Grant</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="img-circle">
                        <a href="https://github.com/hughes2215" target="_blank">
                            <img src={Rodgers} alt="Some text" />
                        </a>
                        <div className="caption">
                            <p className="text-white">Billy Hughes</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About;