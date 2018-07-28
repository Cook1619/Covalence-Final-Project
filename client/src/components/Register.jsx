import React, { Component, Fragment } from 'react';
import * as userServices from '../services/registerusers';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            firstname: "",
            lastname: "",
            password: "",
        }


        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleName = this.handleName.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleFirstName(event) {
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastName(event) {
        this.setState({
            lastname: event.target.value
        })
    }
    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleName(event) {
        this.setState({
            name: event.target.value
        })
    }
    addUser() {
        let userInfo = {
            name: this.state.name,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
        }
        console.log(userInfo)
        userServices.insert(userInfo)
            .catch(error => console.log(error));
    }


    render() {
        return (
            <Fragment>
                <div className="container">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="USERNAME" className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input
                                    type="name"
                                    className="form-control"
                                    id="USERNAME"
                                    placeholder="Username"
                                    onChange={this.handleName}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="FirstName" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input
                                    type="FirstName"
                                    className="form-control"
                                    id="Firstname"
                                    placeholder="First Name"
                                    onChange={this.handleFirstName}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="LastName" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input
                                    type="LastName"
                                    className="form-control"
                                    id="LastName"
                                    placeholder="Last Name"
                                    onChange={this.handleLastName}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="EMAIL" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EMAIL"
                                    placeholder="Email"
                                    onChange={this.handleEmail}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="PASSWORD" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="PASSWORD"
                                    placeholder="Password"
                                    onChange={this.handlePassword}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.addUser}
                                >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}
export default Register;
