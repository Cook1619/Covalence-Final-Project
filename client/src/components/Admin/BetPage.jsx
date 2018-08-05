import React, { Component, Fragment } from 'react';

class BetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }


    async componentDidMount() {
        try {
            let res = await fetch(`/api/futuregames/${id}`);
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
      
        return (
            <Fragment>
                <div className="card">
                    <div className="card-header">
                        <h1>{data.game_location}</h1>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BetPage;
