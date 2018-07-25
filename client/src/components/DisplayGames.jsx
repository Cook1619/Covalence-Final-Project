import React, { Component, Fragment } from 'react';
import GameDetails from './GameDetails';
import Footer from './Footer';

class DisplayGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }
    componentDidMount() {
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

        let gameList = this.state.games.map((game, index) => {
            return <GameDetails key={index} game={game} />
        })

        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        {gameList}
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default DisplayGames;
