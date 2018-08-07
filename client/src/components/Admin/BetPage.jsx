import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

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
                            <h5 className="mt-3 text-center">August 4th 2018</h5>
                            <h5 className="mt-3 text-center">{this.state.game.game_time}</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-text col-12">
                                <h1 className="float-left mt-3">
                                    {`${this.state.game.awayTeam_City}   ${this.state.game.awayTeam_Name}`}
                                    <div className="card-body float-left mt-5 ml-3">
                                        <Link to='/betcheckout' className="btn btn-success float-left position-absolute">¡The {this.state.game.awayTeam_Name} will win!</Link>
                                    </div>
                                </h1>
                                <h1 className="float-right mt-3">
                                    {`${this.state.game.homeTeam_City}   ${this.state.game.homeTeam_Name}`}
                                    <div className="card-body ">
                                        <Link to='/betcheckout/' className="btn btn-success float-right position-relative">¡The {this.state.game.homeTeam_Name} will win!</Link>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BetPage;

