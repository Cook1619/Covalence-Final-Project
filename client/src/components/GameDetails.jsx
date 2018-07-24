import React from 'react';

let GameDetails = ({ gameData }) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-body">{gameData.team1}{gameData.team2}
                
                </div>
            </div>
        </div>
    )
}
export default GameDetails;