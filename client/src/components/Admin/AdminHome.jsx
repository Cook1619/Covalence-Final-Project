import React, { Component, Fragment } from 'react';
import AdminDisplay from './AdminDisplay';

class AdminHome extends Component {
    constructor(props){
        super(props)
        this.state ={
            users: []
        }
    }
    componentDidMount() {
        this.setState({
            users: [
                {user1:'MrRodgersNeighborHood', money: 550, wins: 125},
                {user2:'BehindTheSteelCurtain', money: 70, wins: 6},
                {user3:'Vikingdown', money:20, wins: 0}
            ]
        })
                
    }
    render(){
        let userStats = this.state.users.map((user, index)=>{
            return <AdminDisplay key={index} user={user} />
        })
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        {userStats}
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default AdminHome;