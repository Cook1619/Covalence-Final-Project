import React, { Component, Fragment } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class AdminDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 position-static">
                            <div className="card post-body p-2 m-4 bg-light rounded-3">
                                <div className="card-header bg-dark text-white rounded-0">
                                    <h5>{this.props.user.username}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        {`${this.props.user} money and ${this.props.user} wins!!!!`}
                                    </div>
                                    <Link key={props.id} className="btn btn-info float-right" to={`/${props.id}`}>More Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AdminDisplay;