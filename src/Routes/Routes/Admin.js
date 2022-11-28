import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Admin = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const {role,setRole}=useState(null)
    const [role]
    return (
        <div>
            
        </div>
    );
};

export default Admin;