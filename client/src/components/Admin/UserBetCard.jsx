import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserBetCard extends Component {
    render() {
        return (
            <div className="card bg-dark mt-4 col-3 border-dark p-3 m-2 shadow">
                <div className="card-header text-center bg-light"><u>Amount Bet:</u>
                    <div className="card-text text-center"><b>${this.props.bet.amount}</b></div>
                    <div className="card-header text-center bg-light"><u>On Team:</u>
                        <div className="card-text text-center"><i>{this.props.bet.teamName}</i></div>
                        <Link className="btn btn-sm btn-dark float-bottom mt-2" to="/futuregames">Bet Again!</Link>
                    </div>
                </div>
            </div>
        );
    }
}