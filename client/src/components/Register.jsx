import React, { Component } from 'react';

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
            <h1>Hello</h1>
                <form>
                    <input type="text" placeholder="FIRSTNAME" /><input type="text" placeholder="LASTNAME" />
                </form>
            </Fragment>
        )
    }
}
export default Register;

