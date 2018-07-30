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
import About from './About';
import Register from './Register';
import AdminHome from './Admin/AdminHome';
import Logo from './img/logo.png'
import AdminTeams from './Admin/AdminTeams';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                        <ul className="navbar-nav"> 
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0" to="/"><img src={Logo} alt="Placeholder" width="65px" height="40px"/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 nav-link" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 nav-link" to="/games">Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 nav-link" to="/">How It Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn  border-0 rounded-0 nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 navbar-right nav-link" to="/register">Sign Up!</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 navbar-right nav-link" to="/admin">Admin</Link>
                            </li>
                        </ul>
                        <AuthButton className="nav-link float-right ml-auto" to="/login" />
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/games" component={DisplayGames} />
                        <Route path="/about" component={About} />
                        <Route path="/register" component={Register} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/teams" component={AdminTeams} />
                        <PrivateRoute path="/admin" component={AdminHome} />
                        <PrivateRoute path="/admin/:id" component={AdminHome} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;

