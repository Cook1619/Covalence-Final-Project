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
                <Jumbotron id="jumbotron" >
                    <div>
                        <h1 className="text-center">THANKS FOR BETTING!</h1>
                        <h5 className="text-center">Check your account after the game to see your earnings.</h5>
                    </div>
                </Jumbotron>
            </div>

        )
    }
}

export default PostCheckout;