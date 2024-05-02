import React from 'react';
import UseAuth from '../Pages/Provider/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=UseAuth()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }
   return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;