import React from 'react';
import { Link } from 'react-router-dom';

const FutureGameDetails = ({ gameData }) => {

    return (
        <React.Fragment>
            <div className="col-md-6 position-static">
                <div className="card post-body p-2 m-4 bg-light rounded-0 shadow-lg">
                    <div className="card-header bg-dark text-white rounded-0">
                        <h5 className="text-center mt-3">Matchup Preview</h5>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            {`${gameData.awayTeam_City}   ${gameData.awayTeam_Name} VS ${gameData.homeTeam_City}   ${gameData.homeTeam_Name}`}
                        </div>
                        <div></div>
                        <div>At</div>
                        <div>{`${gameData.game_location}`}</div>
                        <Link to={`games/${gameData.game_ID}`}><button className="btn btn-sm btn-success float-right">Bet Now</button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FutureGameDetails;

