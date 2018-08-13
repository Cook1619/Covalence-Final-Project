import React, { Component, Fragment } from 'react';
import PastGameDetails from './PastGameDetails';

// let sportsURL = 'https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/scoreboard.json?fordate=20180802';

class PastGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/games');
            let data = await res.json();
            this.setState({
                games: data
            })
        } catch (e) {
            console.log(`Error: ${e}`) 
        }
    }
    
    renderPastGames() {
        if (this.state.games.length === 0) {
            return <div className="loader mt-5 mx-auto"></div>
        } else {
            let pastGames = this.state.games.map((game, index)=> {
                return <PastGameDetails key={index} game={game}/>
            })
            return pastGames;
        }
    }
   
    render() {
        return (
            <Fragment>
                <div className="padding-top margin-bottom">
                    <div className="row">
                        {this.renderPastGames()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PastGames;
