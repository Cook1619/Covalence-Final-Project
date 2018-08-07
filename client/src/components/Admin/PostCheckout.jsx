import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class PostCheckout extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3 text-center mt-4">THANKS FOR BETTING!</h1>
                    <h5 className="text-center">Check your account after the game to see your earnings.</h5>
                </Jumbotron>
            </div>

        )
    }
}

export default PostCheckout;