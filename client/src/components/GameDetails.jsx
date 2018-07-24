import React, { Component } from 'react';

class GameDetails extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
                    <div className="col-6 position-static">
                        <div className="card p-2 m-4 bg-light rounded-3">
                            <div className="card-header bg-dark text-white rounded-0">Some text here</div>
                            <div className="card-body shadow">
                                <h3 className="card-title">Matchup Preview</h3>
                                <p className="card-text">{`${this.props.game.team1} VS ${this.props.game.team2}`}</p>
                                <button className="btn btn-sm btn-info float-right">Bet Now</button>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default GameDetails;