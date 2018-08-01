import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class GameDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props.game[0].game.awayTeam.Name);
    }

    render() {
        return (
            <div className="col-md-6 position-static">
                <div className="card post-body p-2 m-4 bg-light rounded-3">
                    <div className="card-header bg-dark text-white rounded-0">
                        <h5>Matchup Preview</h5>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            {`${this.props.game[0].game.awayTeam.Name} VS ${this.props.game[0].game.homeTeam.Name}`}
                        </div>
                        <Link to="/teams"><button className="btn btn-sm btn-success float-right">Bet Now</button></Link>
                    </div>
                </div>
            </div>
        )
    }

}
export default GameDetails;