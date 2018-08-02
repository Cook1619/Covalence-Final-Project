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
                    <form className="pt-4 mt-5">
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-6">
                                <input
                                    htmlFor="USERNAME"
                                    type="name"
                                    className="form-control rounded-0"
                                    id="USERNAME"
                                    placeholder="Username"
                                    onChange={this.handleName}
                                />
                            </div>
                        </div>
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-6">
                                <input
                                    htmlFor="FirstName"
                                    type="FirstName"
                                    className="form-control rounded-0"
                                    id="Firstname"
                                    placeholder="First Name"
                                    onChange={this.handleFirstName}
                                />
                            </div>
                        </div>
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-6">
                                <input
                                    htmlFor="LastName"
                                    type="LastName"
                                    className="form-control rounded-0"
                                    id="LastName"
                                    placeholder="Last Name"
                                    onChange={this.handleLastName}
                                />
                            </div>
                        </div>
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-6">
                                <input
                                    htmlFor="EMAIL"
                                    type="email"
                                    className="form-control rounded-0"
                                    id="EMAIL"
                                    placeholder="Email"
                                    onChange={this.handleEmail}
                                />
                            </div>
                        </div>
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-6">
                                <input
                                    htmlFor="PASSWORD"
                                    type="password"
                                    className="form-control rounded-0"
                                    id="PASSWORD"
                                    placeholder="Password"
                                    onChange={this.handlePassword}
                                />
                            </div>
                        </div>
                        <div className="form-group row d-flex justify-content-center">
                            <div className="mx-auto col-6">
                                <button
                                    
                                    type="submit"
                                    className="btn col-12 fancy-button shadow d-flex justify-content-center rounded-0"
                                    onClick={this.addUser}
                                >Sign Up!</button>
                            </div>
                        </div>
                    </form>
            </Fragment>
        )
    }
}
export default Register;
