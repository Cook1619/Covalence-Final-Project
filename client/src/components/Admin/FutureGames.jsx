import React, { Component, Fragment } from 'react';
import FutureGameDetails from '../FutureGameDetails';
import BaseballPhoto from '../img/baseballheader.png'


class FutureGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/futuregames');
            let data = await res.json();
            this.setState({
                games: data
            })
            console.log(data)
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }
    render() {

        let gameList = this.state.games.map((game, index) => { 
            return <FutureGameDetails key={index} gameData={game} />
        })

        return (
            <Fragment>
                <img className = "w-100" src={BaseballPhoto} alt=""/>
                <div className="container-fluid">
                    <div className="row">
                        {gameList}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FutureGames;
