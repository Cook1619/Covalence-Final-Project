import React from 'react';
import Rodgers from './img/rodgers.png'
import Peter from './img/mypic.png'
import teambg from './img/teambg.png'

const About = () => {
    return (
        <div className="container pt-4">
        <img src={teambg} className = "mx-auto pt-4 pb-4 d-flex justify-content-center" alt=""/>
            <div className="row" className="d-flex justify-content-center">
                <div>
                    <div className="col-md-3 img-circle profilepic">
                        <a href="https://github.com/Cook1619" target="_blank">
                            <img src={Rodgers} alt="Some text" />
                        </a>
                    </div>
                </div>
                <div>
                    <div className="col-md-3 img-circle profilepic w-100">
                        <a href="https://github.com/percussion1313" target="_blank">
                            <img src={Peter} alt="Some text" />
                        </a>
                    </div>
                </div>
                <div>
                    <div className=" col-md-3 img-circle profilepic">
                        <a href="https://github.com/hughes2215" target="_blank">
                            <img src={Rodgers} alt="Some text" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;