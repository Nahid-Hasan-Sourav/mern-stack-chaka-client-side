import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getRole } from '../../Api/UserRole';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SellerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [role,setRole]=useState(null)
    const [roleLoading,setRoleLoading] = useState(true)
    useEffect(()=>{
        setRoleLoading(true)
        getRole(user?.email).then(data=>{
            setRole(data.role)
            setRoleLoading(false)
        })
    },[user])
    if(loading || roleLoading){
        return(
            <LoadingSpinner></LoadingSpinner>
        )
    }

    if(user && user.uid && role === 'seller' ){
        
        return children;
    }
    if(roleLoading===false){
        return <Navigate to='/dashboard'></Navigate>
    }

};

export default SellerRoute;