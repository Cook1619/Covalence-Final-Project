import React, { Component, Fragment } from 'react';

class BetDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let games = this.props.game.game
        return (
            <div className="col-lg-12 position-static">
                <div className="card post-body p-2 m-4 bg-light rounded-0">
                    <div className="card-header bg-dark text-white rounded-0 text-center">
                        <h5 className="mt-3">{games.location}</h5>
                    </div>
                    <div className="card-body text-center">
                        <h4>
                            {`${games.awayTeam.Name} vs ${games.homeTeam.Name}`}
                        </h4>
                        <div className="card-text">
                            {`Game Time: ${this.props.game.time}`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default BetDisplay;