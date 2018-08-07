import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';

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
            console.log(data);
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }
    render() {
        return (
            <div>
                <div className="card bg-dark mt-5">
                    <div className="card-header">
                        <div className="card-body text-light text-center">
                            <h4>{`Hello ${this.state.users.firstname} ${this.state.users.lastname}!`}</h4>
                            <p className="card-text mt-3">{`Email: ${this.state.users.email}`}</p>
                            <p className="card-text">Joined: <Moment date={this.state.users._created} /></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccount;

