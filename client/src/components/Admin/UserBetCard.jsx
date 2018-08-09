import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserBetCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bet: this.props.bet
        };
    }

    async simulateGame() {
        try {
            let result = await fetch(`/api/fake_it/${this.state.bet.betid}`, { method: 'PUT' });
            let data = await result.json();
            this.setState({
                bet: data
            })
        } catch (e) {
            console.log(`Error updating bet: ${e}`);
        }
    }

    renderWinOrLose() {
        switch (this.state.bet.is_winning_bet) {
            case 1:
                return <p style={{ color: 'green', fontWeight: 'bold' }}>You won!</p>;
            case 2:
                return <p style={{ color: 'red', fontWeight: 'bold' }}>You lost!</p>;
            default:
                return (<i><p>Waiting on result ..</p></i>);
        }
    }

    renderBetOrCollectButton() {
        switch (this.state.bet.is_winning_bet) {
            case 1:
                return <Link className="btn btn-sm btn-success float-bottom my-2 disabled" to="/">Colect Winnings!</Link>;
            case 2:
                return <Link className="btn btn-sm btn-dark float-bottom my-2" to="/futuregames">Bet Again!</Link>;
            default:
                return <Link className="btn btn-sm btn-dark float-bottom my-2" to="/futuregames">Push Your Luck?</Link>;
        }
    }

    render() {
        return (
            <div className="card bg-dark m-2 col-3 border-dark p-3 shadow">
                <div className="card-text text-center bg-light"><u>Status:</u> {this.renderWinOrLose()}</div>
                <div className="card-text text-center bg-light"><u>Amount Bet:</u>
                    <div className="card-text text-center"><b>${this.state.bet.amount}</b></div>
                    <div className="text-center bg-light"><u>On Team:</u>
                        <div className="card-text text-center"><i>{this.state.bet.teamName}</i></div>
                        {this.renderBetOrCollectButton()}
                        <div>
                            <button className="remove-all-styles btn btn-outline-warning mb-1" onClick={() => this.simulateGame()}>(simulate game)</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}