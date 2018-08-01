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


    componentDidMount(){
        fetch(sportsURL, {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${apiKey}`
            })
        }).then(res => res.json())
            .then(response => this.setState({
                games: response
            }));
    }
   
    render() {
           
            for( let value in this.state.games){
                // console.log(this.state.games.scoreboard.gameScore)
                return <GameDetails key={value.id} game={this.state.games.scoreboard.gameScore}/>
            }

        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                    
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PastGames;
