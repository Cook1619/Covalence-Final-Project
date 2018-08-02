import React, { Component, Fragment } from 'react';
import GameDetails from './GameDetails';

let apiKey = 'ZTkxZmFhYzAtYmFjMi00ZjdlLWFmZGUtODUzZWY3Oktpbm84MTY3MjE0MSE=';
let sportsURL = 'https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/scoreboard.json?fordate=20180625';

class PastGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }


    componentWillMount(){
        fetch(sportsURL, {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${apiKey}`
            })
        }).then(res => res.json())
            .then(response => this.setState({
                games: response.scoreboard.gameScore
            }));
    }
   
    render() {
           let pastGames = this.state.games.map((game, index)=> {
               return <GameDetails key={index} game={game}/>
           })
        return (
            <Fragment>
                <div className="container-fluid mt-5">
                    <div className="row">
                        {pastGames}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PastGames;
