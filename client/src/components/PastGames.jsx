import React, { Component, Fragment } from 'react';
import GameDetails from './GameDetails';

let apiKey = 'e91faac0-bac2-4f7e-afde-853ef7:Kino81672141!';
let sportsURL = 'https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/scoreboard.json?fordate=20180625';

class PastGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    // async componentDidMount() {
    //     const res = await fetch(sportsURL)
    //     const data = await res.json()
    //     this.setState({
    //         games: data
    //     })
    // }
    componentDidMount() {
        fetch(sportsURL, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey
            },
            credentials: "same-origin"
        }).then(function (response) {
            response.status     //=> number 100–599
            response.statusText //=> String
            response.headers    //=> Headers
            response.url        //=> String

            return response.text()
        }, function (error) {
            error.message //=> String
        })
    }
    // componentDidMount() {
    //     let res = fetch(sportsURL, {
    //         body: res.json(),
    //         headers: new Headers({
    //             'Content-type': 'application/json',
    //             Authorization: apiKey
    //         })
    //     }).then(res => res.json())
    //         .catch(error => console.log(error));
    // }

    // componentDidMount(){
    //     fetch(sportsURL, {
    //         body: JSON.stringify(data), // data can be `string` or {object}!
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': apiKey
    //         }
    //     }).then(res => res.json())
    //         .catch(error => console.error('Error:', error))
    //         .then(response => console.log('Success:', response));
    // }
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

export default PastGames;
