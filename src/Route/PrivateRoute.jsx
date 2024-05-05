import React from 'react';
import UseAuth from '../Pages/Provider/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
        const {user,loading}=UseAuth()
        const location = useLocation()
        console.log(location);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }
   return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;