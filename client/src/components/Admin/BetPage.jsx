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
            let res = await fetch('https://strikezone.herokuapp.com/api/futuregames/2');
            let data = await res.json();
            this.setState({
                game: data
            })
            console.log(game);
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }

    render() {
      console.log(this.state.game)
        return (
            <Fragment>
                <div className="col-md-12 position-static">
                    <div className="card post-body p-2 m-4 bg-light rounded-0 shadow-lg">
                        <div className="card-header bg-dark text-white rounded-0">
                            <h5 className="text-center mt-3">Matchup Preview</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                {`${game.awayTeam_City}   ${game.awayTeam_Name} VS ${game.homeTeam_City}   ${game.homeTeam_Name}`}
                            </div>
                            <div></div>
                            <div>At</div>
                            <div>{`${game.game_location}`}</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BetPage;
