import React, { Component, Fragment } from 'react';

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
        })
    }
    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default DisplayGames;