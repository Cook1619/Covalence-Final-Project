import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <h1>This is a change</h1>;
    }
}

export default HelloWorld;