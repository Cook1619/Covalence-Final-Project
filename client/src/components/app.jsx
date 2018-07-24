import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Donate from './donate';
import DisplayGames from './DisplayGames';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <Link className="nav-item nav-link" to="/">Games</Link>
                        <AuthButton />
                    </nav>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" component={DisplayGames} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;