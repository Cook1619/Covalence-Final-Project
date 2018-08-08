import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';

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
            this.setState({
                game: data[0]
            })
            console.log(data[0])

        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }

    render() {
        // console.log(this.state.game[0])
        return (
            <Fragment>
                <div className="col-md-12 margin-top large-margin-bottom border-2">
                    <div className="card post-body p-2 m-4 bg-light rounded-0 shadow-lg">
                        <div className="card-header bg-dark text-white rounded-0 row">
                            <div className="col-md-4 pull-right">
                                <img src={this.state.game.awayTeam} alt="" className="logo-left d-flex mx-auto" />
                            </div>
                            <div className="col-md-4 ">
                                <h5 className="text-center mt-3">{`${this.state.game.game_location}`} </h5>
                                <h5 className="mt-3 text-center"><Moment format="MM/DD/YYYY">{`${this.state.game.game_date}`}</Moment></h5>
                                <h5 className="mt-3 text-center">{this.state.game.game_time}</h5>
                            </div>

                            <div className="col-md-4 ">
                                <img src={this.state.game.homeTeam} alt="" className="logo-right d-flex mx-auto" />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-text col">
                                <div>
                                    <h1 className="float-left mt-3 col-md-6 text-center">
                                        {`${this.state.game.awayTeam_City}   ${this.state.game.awayTeam_Name}`}
                                        <div className="card-body">
                                            <div>
                                                <Link to='/betcheckout' className="btn btn-success">¡The {this.state.game.awayTeam_Name} will win!</Link>
                                            </div>

                                        </div>
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="float-left mt-3 col-md-6 text-center">
                                        {`${this.state.game.homeTeam_City}   ${this.state.game.homeTeam_Name}`}
                                        <div className="card-body">
                                            <div>
                                                <Link to='/betcheckout' className="btn btn-success">¡The {this.state.game.awayTeam_Name} will win!</Link>
                                            </div>

                                        </div>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BetPage;

