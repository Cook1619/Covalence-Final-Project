import React, { Component, Fragment } from 'react';
import Footer from './Footer';

class GameDetails extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card p-2 m-4 bg-light rounded-3">
                            <div className="card-body">
                                <h5 className="card-header bg-dark text-white rounded-0">Some Text here</h5>  
                                <div className="card-title"> Matchup Preview</div>
                                <p className="card-text">{`${this.props.game.team1} VS ${this.props.game.team2}`}</p>
                                <button className="btn btn-sm btn-success float-right">Bet Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // <div className="col-6 position-static">
            //     <div className="card p-2 m-4 bg-light rounded-3">
            //         <div className="card-header bg-dark text-white rounded-0">Some text here</div>
            //         <div className="card-body shadow">
            //             <h3 className="card-title">Matchup Preview</h3>
            //             <p className="card-text">{`${this.props.game.team1} VS ${this.props.game.team2}`}</p>
            //             <button className="btn btn-sm btn-success float-right">Bet Now</button>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
export default GameDetails;