import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
            .then((loggedIn) => {
                if (loggedIn) {
                    this.setState({ redirectToReferrer: true, checkingLogin: false });
                } else {
                    this.setState({ checkingLogin: false });
                }
            });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
            .then(() => {
                this.setState({ redirectToReferrer: true });
            }).catch((err) => {
                if (err.message) {
                    this.setState({ feedbackMessage: err.message });
                }
            });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, checkingLogin } = this.state;

        if (checkingLogin) {
            return <IndeterminateProgress message="Checking Login Status..." />;
        }
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <Fragment>
                <p className="login-padding-top d-flex justify-content-center login-form">Login Here!</p>
                <div className="d-flex justify-content-center login-padding-bottom">
                    <form className="login-form p-0 col-6 rounded-0"   onSubmit={(e) => this.login(e)}>
                        <div className="form-group col-md-8 d-flex mx-auto p-2">
                            <input placeholder="Email" htmlFor="email" id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-8 d-flex mx-auto">
                            <input htmlFor="password" placeholder="Password" id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                        </div>
                        {this.state.feedbackMessage ? (
                            <p>{this.state.feedbackMessage}</p>
                        ) : null}
                        <input type="submit" value="Login" className="fancy-button btn btn-success login-button d-flex mx-auto mb-10 login-margin-bottom" />
                    </form>
                </div>

            </Fragment>
        );
    }
}

export default Login;