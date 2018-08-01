import React from 'react';
import Rodgers from './img/rodgers.png'
import Peter from './img/mypic.png'
import teambg from './img/teambg.png'

const About = () => {
    return (
        <div className="container">
        <img src={teambg} className = "mx-auto pt-4 pb-4" alt=""/>
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
                    <div className="img-circle profilepic">
                        <a href="https://github.com/percussion1313" target="_blank">
                            <img src={Peter} alt="Some text" />
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
        </div>
    )
}
export default About;