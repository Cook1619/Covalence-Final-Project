import React, { Component, Fragment } from 'react';
import FutureGameDetails from './FutureGameDetails';
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
        } catch (e) {
            console.log(`Error: ${e}`) 
        }
    }
    
    
    render() {
        let gameList = this.state.games.map((obj, index) => { 
            return <FutureGameDetails key={index} gameData={obj} />
        })
        return (
            <div>
                <img className = "w-100 mt-5" src={BaseballPhoto} alt=""/>
                <div className="container-fluid">
                    <div className="row">
                        { gameList }
                    </div>
                </div>
            </div>
        )
    }
}

export default FutureGames;
