import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
// import { Redirect } from 'react-router';
import {Route} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

function PrivateRoute({component:Component,...rest}) {
    const {user} = useContext(AuthContext) 
    return (
        <Route {...rest} render={props=>{
            return user?<Component {...props}/> :<Navigate to="/login" />
        }} />
    )
}

export default PrivateRoute