import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import UserBetCard from './UserBetCard';

class MyAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            bets: []
        }

    }


    async componentWillMount() {
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
                users: data
            })

            let id = data.id
            let betResult = await fetch(`/api/bet/${id}`);
            let betData = await betResult.json();
            this.setState({
                bets: betData
            })

        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }

    renderBets() {
        if (this.state.bets.length === 0) {
            return <div className="loader mt-5"></div>
        } else {
            let allBets = this.state.bets.map((bet, index) => {
                return <UserBetCard key={index} bet={bet} />
            });
            return allBets;
        }
    }

    render() {

        // let allBets = this.state.bets.map((bet, index) => {
        //     return <UserBetCard key={index} bet={bet} />
        // });

        return (
            <div className="pt-5">
                <div className="card bg-dark mt-5 shadow">
                    <div className="card-header">
                        <div className="card-body text-light text-center">
                            <h4>{`Hello ${this.state.users.firstname}!`}</h4>
                            <p className="card-text mt-3">{`Email: ${this.state.users.email}`}</p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center" style={{ marginBottom: '5rem' }}>
                    {this.renderBets()}
                </div>
            </div>
        )
    }
}

export default MyAccount;

