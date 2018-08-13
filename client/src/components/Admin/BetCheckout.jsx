import React, { Component } from 'react';
import * as betServices from '../../services/bets';
import { Link } from 'react-router-dom';
import Donate from '../donate';

class BetCheckout extends Component {
    constructor(props) {
        super(props);
        console.log(props)
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
                    <div className="card col-4 w-25">
                        <img src={this.props.location.state.img} alt="baseball" className="logo-right d-flex mx-auto" />
                        <div className="card-body bg-success mt-2 rounded">
                            <h3 className="card-title text-center text-white">Matchup Selection</h3>
                            <h6 className="card-text text-center text-white">{this.props.location.state.homeTeam_Name}!</h6>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container d-flex justify-content-center">
                    <div className="card col-4 w-25">
                        <img src={this.props.location.state.img} alt="baseball" className="logo-right d-flex mx-auto" />
                        <div className="card-body bg-success mt-2 rounded">
                            <h3 className="card-title text-center text-white">Matchup Selection</h3>
                            <h6 className="card-text text-center text-white">{this.props.location.state.awayTeam_Name}!</h6>
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
            alert('Thank you for betting!')
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
                                id="bet-button"
                                className="btn btn-success rounded-0 bet-button float-right"
                                to="/MyAccount"
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

