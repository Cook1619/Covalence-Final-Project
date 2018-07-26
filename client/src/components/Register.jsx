import React, { Component, Fragment } from 'react';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }

    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <form>
                        <div className="form-group row">
                            <label for="FirstName" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="FirstName" className="form-control" id="Firstname" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="LastName" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="LastName" className="form-control" id="LastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="EMAIL" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="EMAIL" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="PASSWORD" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="PASSWORD" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="CONFIRMPASSWORD" className="col-sm-2 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="CONFIRMPASSWORD" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="USERNAME" className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input type="User Name" className="form-control" id="USERNAME" placeholder="User Name" />
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}
export default Register;

