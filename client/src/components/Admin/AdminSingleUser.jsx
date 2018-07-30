import React, { Component, Fragment } from 'react';
import * as blogServices from '../../services/registerusers'
import { Link } from 'react-router-dom';
import { render } from 'react-dom';


class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let res = await fetch('/api/users/' + id);
            let data = await res.json();
            this.setState({
                users: data
            })
        } catch (e) {
            console.log(e);
        }
    }
    async deleteUser() {
        try {
            let id = this.props.match.params.id
            let results = await blogServices.destroy(id)
            console.log(results);
        } catch (err) {
            console.log('This is the' + err);
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-body">{this.state.users.name}
                            <p>{this.state.users._created}</p>
                            <Link className="btn btn-info float-right m-2" to={`/admin`} onClick={this.deleteUser.bind(this)}> Delete User</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBlog;

