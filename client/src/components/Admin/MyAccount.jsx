import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class MyAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

    }
    async componentDidMount() {
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
            console.log(data)
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div className="pt-5">
                <div className="card bg-dark mt-5 shadow">
                    <div className="card-header">
                        <div className="card-body text-light text-center">
                            <h4>{`Hello ${this.state.users.firstname}!`}</h4>
                            <p className="card-text mt-3">{`Email: ${this.state.users.email}`}</p>
                            <p className="card-text">Joined: <Moment date={this.state.users._created} /></p>
                        </div>
                    </div>
                </div>
                <div className="card bg-dark col-4 mt-4 border-dark p-3 mb-3 shadow">
                    <div className="card-header text-center bg-light"><u>Amount Won:</u>
                        <div className="card-text text-center">$230.50</div>
                        <Link className="btn btn-sm btn-dark float-bottom mt-2" to="/futuregames">Bet Again!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccount;

