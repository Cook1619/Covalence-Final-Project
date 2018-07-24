import React, { Component } from 'react';

class GameDetails extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.game.team1}</div>
            </div>
        )
    }
}
export default GameDetails;