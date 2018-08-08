import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../../services/stripeService';
import { Link } from 'react-router-dom';

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: '',
            dollars: null
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let token = await this.props.stripe.createToken({ name: this.state.customerName });
            await postCharge({ id: token.token.id, amount: 10 });
            alert('Thanks for your payment!')
        } catch (e) {
            console.log(e);
        }
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 d-flex align-text-center">
                    <form className="col mx-auto" onSubmit={(e) => this.handleSubmit(e)}>
                        <input onChange={(e) => this.handleNameInput(e)} placeholder="Name" htmlFor="name" id="name" />
                        <CardSection />      
                        <Link className="btn btn-success" to="/postcheckout">SUBMIT</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);
