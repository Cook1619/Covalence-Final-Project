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
    handleFirstName(event){
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    handleEmail(event){
        this.setState({
            password: event.target.value
        })
    }
    handleUserName(event){
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="FirstName" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input 
                                type="FirstName" 
                                className="form-control" 
                                id="Firstname" 
                                placeholder="First Name"
                                onChange={this.handleFirstName.bind}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="LastName" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input 
                                type="LastName" 
                                className="form-control" 
                                id="LastName" 
                                placeholder="Last Name"
                                onChange={this.handleLastName.bind}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="EMAIL" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input 
                                type="email" 
                                className="form-control" 
                                id="EMAIL" 
                                placeholder="Email"
                                onChange={this.handleEmail.bind}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="PASSWORD" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input 
                                type="password" 
                                className="form-control" 
                                id="PASSWORD" 
                                placeholder="Password" 
                                onChange={this.handlePassword.bind}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="CONFIRMPASSWORD" className="col-sm-2 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="CONFIRMPASSWORD" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="USERNAME" className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input 
                                type="User Name" 
                                className="form-control" 
                                id="USERNAME" 
                                placeholder="User Name" 
                                onChange={this.handleUserName.bind}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}
export default Register;

