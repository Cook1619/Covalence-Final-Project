import React, { Component } from 'react';
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
                <div className="text-center mt-5">You have chosen the {this.props.location.state.homeTeam_Name}!</div>
            )
        } else {
            return (
                <div className="text-center mt-5">You have chosen the {this.props.location.state.awayTeam_Name}!</div>
            )
        }
    }

    handleBet(e) {
         this.setState({bet: e.target.value})
    }

    render() {
       
        console.log(this.state)

        return (
            <div id="checkout">
               {this.teamRender()}
                <div className="card bg-light col-8 d-flex mx-auto mt-5">
                    <div className="card-body float-left">
                      <input type="text" value={this.state.bet} onChange={this.handleBet.bind(this)}/>{/* <Donate /> */} 
                    </div>

                </div>

            </div>

        )
    }
}

export default BetCheckout;

