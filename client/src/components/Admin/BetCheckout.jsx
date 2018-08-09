import React, { Component } from 'react';
import * as betServices from '../../services/bets';
import { Link } from 'react-router-dom';
import Donate from '../donate';

class BetCheckout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: [],
            teamid: [],
            gameid: [],
            bet: ''
        };
    }

    async componentDidMount() {
        this.setState({
            gameid: this.props.location.state.game_ID
        })
        if (this.props.location.state.homeTeam_ID) {
            this.setState({
                teamid: this.props.location.state.homeTeam_ID
            })
        } else {
            this.setState({
                teamid: this.props.location.state.awayTeam_ID
            })
        }

        try {
            const AUTH_TOKEN_KEY = 'authtoken';
            let token = localStorage.getItem(AUTH_TOKEN_KEY);
            let res = await fetch('/api/users/me', {
                headers: {
                    'Authorization': token
                }
            });
            let data = await res.json();
            this.setState({
                userid: data.id
            })
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }

    teamRender() {
        if (this.props.location.state.homeTeam_Name) {
            return (
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="card">
                            <div className="card-header bg-dark text-light">
                                <h4>Matchup Selection</h4>
                            </div>
                            <div className="text-center mt-5 card-body">
                                <h4>{this.props.location.state.homeTeam_Name}!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-header bg-dark text-light">
                                <h4>Matchup Selection</h4>
                            </div>
                            <div className="text-center mt-5 card-body">
                                <h4>{this.props.location.state.awayTeam_Name}!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    handleBet(e) {
        this.setState({ bet: e.target.value })
    }

    addBet() {
        let userInfo = {
            userid: this.state.userid,
            teamid: this.state.teamid,
            gameid: this.state.gameid,
            bet: this.state.bet,
        }
        console.log(userInfo)
        if (this.state.bet === '') {
            alert('Please Fill out the form');
        } else {
            betServices.insert(userInfo)
            alert('Thank you for registering!')
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <div id="checkout">
                {this.teamRender()}
                <form>
                    <div className="card bg-light col-8 d-flex mx-auto mt-5">
                        <div className="card-body float-left">
                            <h5>Enter Bet Here:</h5>
                            <input
                                type="text"
                                value={this.state.bet}
                                onChange={this.handleBet.bind(this)}
                            />
                            <Link
                                className="btn btn-success rounded-0 mt-0 float-right"
                                to="/MyAccount"
                                type="submit"
                                onClick={this.addBet.bind(this)}
                            >Complete Bet!!</Link>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default BetCheckout;

