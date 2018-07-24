import React, { Component, Fragment } from 'react';
import GameDetails from './GameDetails';
class DisplayGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }
    async componentDidMount() {
        this.setState({
            games: [
                { team1: 'Green Bay', team2: 'Minnesota' },
                { team1: 'Chicago', team2: 'Kansas City' },
                { team1: 'San Diego', team2: 'Utah' },
                { team1: 'Denver', team2: 'Houston' },
            ]
        });
    }
    render() {
        console.log(this.state.games);
        let gameList = this.state.games.map((game, index) => {
            return <GameDetails key={index} game={game} />
        })
        return (
            <Fragment>
                <h1>Hello</h1>
                {gameList}
            </Fragment>
        )
    }
}

export default DisplayGames;