import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Donate from './donate';
import DisplayGames from './DisplayGames';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import HomePage from './HomePage';
import Contact from './Contact';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav className="navbar transparent ">
                        <img src="https://www.logolynx.com/images/logolynx/f0/f009386dc544d1455db05db19d454629.png" width="100px" alt=""/>
                        <Link className="btn btn-outline-light border-0 rounded-0 btn-sml float-left" to="/">Home</Link>
                        <Link className="btn btn-outline-light border-0 rounded-0 btn-sml" to="/games">Games</Link>
                        <Link className="btn btn-outline-light border-0 rounded-0 btn-sml" to="/">Pricing</Link>
                        <Link className="btn btn-outline-light border-0 rounded-0 btn-sml" to="/">How It Works</Link>
                        <Link className="btn btn-outline-light border-0 rounded-0 btn-sml" to="/contact">Contact</Link>
                        <Link className="btn btn-dark rounded-0 btn-sml float-right" to="/">SIGN UP</Link>
                        <AuthButton className="nav-item nav-link"/>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/games" component={DisplayGames} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;