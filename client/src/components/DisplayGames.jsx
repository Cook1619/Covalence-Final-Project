import React, { Component, Fragment } from 'react';
import GameDetails from './GameDetails';

class DisplayGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }
    componentDidMount() {
        this.setState({
            games: []
        });
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
