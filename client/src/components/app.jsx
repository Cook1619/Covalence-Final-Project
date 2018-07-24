import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
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
                        <Link className="nav-item nav-link" to="/goodbye">Goodbye</Link>
                        <Link className="nav-item nav-link" to="/games">Games</Link>
                        <AuthButton />
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route path="/login" component={Login} />
                        <Route path="/games" component={DisplayGames} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;