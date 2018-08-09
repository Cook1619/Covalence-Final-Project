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

    // async componentDidMount() {
    //     try {
    //         let id = this.state.users.id
    //         let res = await fetch(`/api/bet/${id}`);
    //         let betData = await res.json();
    //         this.setState({
    //             bets: betData
    //         })
    //        console.log(id)
    //     } catch (e) {
    //         console.log(`Error: ${e}`) 
    //     }
    // }

    render() {

        let allBets = this.state.bets.map((bet, index) => {
            return <UserBetCard key={index} bet={bet} />
        });

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
                
                <div className="container-fluid row d-flex justify-content-center">
                    {allBets}
                </div>
            </div>
        )
    }
}

export default MyAccount;

