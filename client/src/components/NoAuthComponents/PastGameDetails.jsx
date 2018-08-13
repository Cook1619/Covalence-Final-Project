import React from 'react';
import Moment from 'react-moment';

const PastGameDetails = ({ game }) => {

    return (
        <React.Fragment>
            <div className="col-md-4 position-static">
                <div className="card post-body p-2 m-4 bg-light rounded-0">
                    <div className="card-header bg-dark text-white rounded-0 text-center">
                        <h5 className="mt-3">{game.game_location}</h5>
                        <h3><Moment format="MM/DD/YYYY">{game.game_date}</Moment></h3>
                    </div>
                    <div className="card-body text-center">
                        <h4>
                            {`${game.awayTeam_Name} ${game.awayScore}`}
                        </h4>
                        <h4>
                            {`${game.homeTeam_Name} ${game.homeScore}`}
                        </h4>
                    </div>
                </div>
            </div>
        
        </React.Fragment>
    );
}

export default PastGameDetails;