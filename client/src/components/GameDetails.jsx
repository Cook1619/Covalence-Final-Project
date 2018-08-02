import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class GameDetails extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let games = this.props.game.game
        return (
            <div className="col-md-4 position-static">
                <div className="card post-body p-2 m-4 bg-light rounded-0">
                    <div className="card-header bg-dark text-white rounded-0 text-center">
                        <h5 className="mt-3">{games.location}</h5>
                    </div>
                    <div className="card-body text-center">
                        <h4>
                            {`${games.awayTeam.Name} vs ${games.homeTeam.Name}`}
                        </h4>
                        <div className="card-text">
                            {`Final Score: ${this.props.game.awayScore}  ${this.props.game.homeScore}`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default GameDetails;