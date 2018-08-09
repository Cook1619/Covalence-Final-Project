import React, { Component } from 'react';

export default class SimulateGame extends Component {
    constructor(props) {
        super(props);
    }

    async simulateGame() {
        let result = await fetch('/api/fake_it/');
        console.log(result);
    }   

    render() {
        return(
            <div>
                <button className='btn btn-success' onClick={() => this.simulateGame()}>Simulate Game</button>
            </div>
        );
    }
}