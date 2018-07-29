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
        try {
            let res = await fetch('/api/sports');
            let data = await res.json();
            this.setState({
                games: data
            })
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }
    render() {

        let gameList = this.state.games.map((game, index) => {
            return <GameDetails key={index} game={game} />
        })

        return (
            <Fragment>
                <h1>Hello</h1>
                <div className="container-fluid">
                    <div className="row">
                        {gameList}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DisplayGames;
