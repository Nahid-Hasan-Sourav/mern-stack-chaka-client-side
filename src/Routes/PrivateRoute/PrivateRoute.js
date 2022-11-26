import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return  <LoadingSpinner></LoadingSpinner>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRoute;