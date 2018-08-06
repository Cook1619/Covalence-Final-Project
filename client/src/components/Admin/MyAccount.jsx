import React, { Component, Fragment } from 'react';
import { me } from '../../services/user';


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
            let fuckingToken = localStorage.getItem(AUTH_TOKEN_KEY);
            console.log(fuckingToken);
            let res = await fetch('/api/users/me', {
                headers: {
                    'Authorization': fuckingToken
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
                <div className="card">
                    <div className="card-header">
                        <div className="card-body">
                            <h1>hi</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccount;

