import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Donate from './donate';
import DisplayGames from './DisplayGames';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import HomePage from './HomePage';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
<<<<<<< HEAD
                    <nav className="navbar navbar-light bg-dark">
                        <Link className="btn btn-outline-info btn-sml" to="/games">Games</Link>
                        <AuthButton className="nav-item nav-link"/>
=======
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <Link className="nav-item nav-link" to="/">Games</Link>
                        <AuthButton className="float-right"/>
>>>>>>> 533ad8b2a94985e144ca125d2106789befd769cc
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
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