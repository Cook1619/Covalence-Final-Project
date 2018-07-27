import React, { Component, Fragment } from 'react';

class AdminDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="col-md-6 position-static">
                    <div className="card post-body p-2 m-4 bg-light rounded-3">
                        <div className="card-header bg-dark text-white rounded-0">
                            <h5>{this.props.user.user1}</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                {this.props.user.money}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AdminDisplay;