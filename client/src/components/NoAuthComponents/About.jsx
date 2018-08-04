import React from 'react';
import Rodgers from '../img/rodgers.png'
import Peter from '../img/mypic.png'
import teambg from '../img/teambg.png'

const About = () => {
    return (
        <div className="container pt-4">
        <img src={teambg} className = "mx-auto pt-4 pb-4 d-flex justify-content-center" alt=""/>
            <div className="row" className="d-flex justify-content-center">
                <div>
                    <div className="col-sm-3 profilepic">
                        <a href="https://github.com/Cook1619" target="_blank">
                            <img src={Rodgers} alt="Some text" className="shadow-lg profilepic"/>
                        </a>
                    </div>
                    <h3 className="text-light mt-5">Matt Cook</h3>
                </div>
                <div>
                    <div className="col-sm-3 img-circle profilepic w-100">
                        <a href="https://github.com/percussion1313" target="_blank">
                            <img src={Peter} alt="Some text" className="shadow-lg profilepic" />
                        </a>
                    </div>
                    <h3 className="text-light mt-5">Peter Grant</h3>
                </div>
                <div>
                    <div className=" col-sm-3 img-circle profilepic">
                        <a href="https://github.com/hughes2215" target="_blank">
                            <img src={Rodgers} alt="Some text" className="shadow-lg profilepic" />
                        </a>
                    </div>
                    <h3 className="text-light mt-5">Billy Hughes</h3>
                </div>
            </div>
        </div>
    )
}
export default About;