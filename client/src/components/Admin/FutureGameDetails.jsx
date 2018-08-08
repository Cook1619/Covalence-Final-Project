import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const FutureGameDetails = ({ gameData }) => {

    return (
        <React.Fragment>
            <div className="col-md-6 position-static">
                <div className="card post-body p-2 m-4 bg-light rounded-0 shadow-lg">
                    <div className="card-header bg-dark text-white rounded-0">
                        <h5 className="text-center">Matchup Preview</h5>
                        <p className="text-center"><Moment format="MM/DD/YYYY">{`${gameData.game_date}`     }</Moment></p>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            {`${gameData.awayTeam_City}   ${gameData.awayTeam_Name} VS ${gameData.homeTeam_City}   ${gameData.homeTeam_Name}`}
                        </div>
                        <div></div>
                        <div>At</div>
                        <div>{`${gameData.game_location}`}</div>
                        <p className="text-center float-left">{`${gameData.game_time}`}</p>
                        <Link className="btn btn-sm btn-success float-right" to={`/futuregames/${gameData.id}`}>Bet Now</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FutureGameDetails;

