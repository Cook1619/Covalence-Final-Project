import React, { Component } from 'react';

class GameDetails extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <div className="card p-2 m-4">
                <div className="card-body">
                    <h3 className="card-title">Matchup Preview</h3>
                    <p className="card-text">{`${this.props.game.team1} VS ${this.props.game.team2}`}</p>
                </div>
            </div>
        )
    }
}
export default GameDetails;