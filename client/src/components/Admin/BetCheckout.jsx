import React, { Component } from 'react';
import CheckoutForm from '../Forms/checkoutForm';

class BetCheckout extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Hi</h1>
                <CheckoutForm />
            </div>
        )
    }
}
export default BetCheckout;