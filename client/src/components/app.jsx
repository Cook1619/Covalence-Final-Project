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
import Placeholder from './img/placeholderlogo.png'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
                        <ul class="navbar-nav">
                        <img src={Placeholder} alt="Placeholder" width="50px" height="50px"/>
                            <li class="nav-item">
                                <Link className="btn border-0 rounded-0" to="/"><a class="nav-link">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="btn  border-0 rounded-0" to="/"><a class="nav-link">Pricing</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="btn border-0 rounded-0" to="/"><a class="nav-link">How It Works</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="btn border-0 rounded-0" to="/about"><a class="nav-link">About</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="btn  border-0 rounded-0" to="/contact"><a class="nav-link">Contact</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="btn border-0 rounded-0 navbar-right" to="/"><a class="nav-link">Sign Up!</a></Link>
                            </li>
                        </ul>
                        <AuthButton className="nav-link float-right ml-auto" />
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/games" component={DisplayGames} />
                        <Route path="/about" component={About} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;

