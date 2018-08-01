import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class GameDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    
    render() {
        let games = this.props.game.game
        return (
            <div className="col-md-6 position-static">
                <div className="card post-body p-2 m-4 bg-light rounded-3">
                    <div className="card-header bg-dark text-white rounded-0">
                        <h5>{games.location}</h5>
                    </div>
                    <div className="card-body">
                        <h4>
                            {`${games.awayTeam.Name} VS ${games.homeTeam.Name}`}
                        </h4>
                        <div className="card-ext">
                            {`Final Score: ${this.props.game.homeScore} to ${this.props.game.awayScore}`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default GameDetails;