import React, { Component } from 'react';
import Donate from '../donate';

class BetCheckout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            games: []
        };
    }

    render() {
        return (
            <div>
                <div className="text-center mt-5">You have chosen {this.props.game}</div>
                <div className="card bg-light col-8 d-flex mx-auto mt-5">
                    <div className="card-body float-left">
                        <Donate />
                    </div>

                </div>

            </div>

        )
    }
}

export default BetCheckout;