import React, { Component } from 'react'
import { connect } from 'react-redux'
import {get_user} from '../actions'

class User extends Component {
    render() {
        const {get_user}  = this.props;
        const {user,isFetching,error} = this.props.user;

        let data;
        if(error)
        {
            data=error;
        }
        else if(isFetching)
        {
            data="Loading......";
        }
        else
        {
            data = user.email;
        }

        return (
            <div>
                <div className="container">
                    <h1 className="jumbotron-heading text-center">{data}</h1>
                    <p className="text-center">
                        <button className="btn btn-success mr-2" onClick={()=>get_user()} >GET RANDOM USER</button>
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user,
    }
}



export default connect(mapStateToProps, {get_user})(User)
