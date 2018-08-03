import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Donate from './donate';
import PastGames from './PastGames';
import FutureGames from './Admin/FutureGames'
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import HomePage from './HomePage';
import Contact from './Contact';
import About from './About';
import Register from './Register';
import MyAccount from './Admin/AdminSingleUser';
import Logo from './img/logo.png'
import HowItWorks from './HowItWorks';
import BetPage from './BetPage';

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
                                <Link className="btn border-0 rounded-0 nav-link mt-2" to="/howitworks">How It Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 nav-link mt-2" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn  border-0 rounded-0 nav-link mt-2" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 navbar-right nav-link mt-2" to="/register">Sign Up!</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 nav-link mt-2" to="/pastgames">Past Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 navbar-right nav-link mt-2" to="/futuregames">Bet Now</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn border-0 rounded-0 navbar-right nav-link mt-2" to="/myaccount/:id">My Account</Link>
                            </li>
                        </ul>
                        <AuthButton className="nav-link float-right ml-auto" to="/login" />
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/pastgames" component={PastGames} />
                        <Route path="/about" component={About} />
                        <Route path="/register" component={Register} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/howitworks" component={HowItWorks} />
                        <PrivateRoute path="games/:id" component={BetPage} />
                        <PrivateRoute path="/futuregames" component={FutureGames} />
                        <PrivateRoute path="/myaccount/:id" component={MyAccount} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;

