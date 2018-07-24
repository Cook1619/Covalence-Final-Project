import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-info" to="/logout">Logout</Link>;
    } else {
<<<<<<< HEAD
        return <Link className="btn btn-info" to="/login">Login</Link>;
=======
        return <Link className="btn btn-info float-right rounded-0" to="/login">Login</Link>;
>>>>>>> 533ad8b2a94985e144ca125d2106789befd769cc
    }
};

export default AuthButton;