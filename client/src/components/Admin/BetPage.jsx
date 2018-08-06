import React, { Component, Fragment } from 'react';

class BetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: []
        };
    }


    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let res = await fetch('/api/futuregames/' + id);
            let data = await res.json();
            console.log(data);
            this.setState({
                game: data
            })
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }

    render() {

        return (
            <Fragment>
                <div className="col-md-12 position-static">
                    <div className="card post-body p-2 m-4 bg-light rounded-0 shadow-lg">
                        <div className="card-header bg-dark text-white rounded-0">
                            <h5 className="text-center mt-3">{this.state.game.game_location}</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-text text-center">
                                {`${this.state.game.awayTeam_City}   ${this.state.game.awayTeam_Name} VS ${this.state.game.homeTeam_City}   ${this.state.game.homeTeam_Name}`}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BetPage;
