import React, { Component, Fragment } from 'react';
import AdminDisplay from './AdminDisplay';

class AdminHome extends Component {
    constructor(props){
        super(props)
        
            this.userId = props.match.params.id;

    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/users/');
            let data = await res.json();
            this.setState({
                users: data
            })
            console.log(data)
        } catch (e) {
            console.log(`Error: ${e}`)
        }
    }
    render(){
        let userStats = this.state.users.map((user, index)=>{
            return <AdminDisplay key={index} user={user} />
        })
        return(
            <Fragment>
                        {userStats}
            </Fragment>
        )
    }

}

export default AdminHome;