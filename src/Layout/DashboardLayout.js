import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { setAuthToken } from '../Api/auth';
import { getRole } from '../Api/UserRole';
import Sidebar from '../Components/Dashboard/Sidebar';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const DashboardLayout = () => {
    const {user,logOut}=useContext(AuthContext)
  const [userRole,setuserRole]=useState('')

  useEffect(()=>{
    // if(user){
    //   if(userRole!=='admin' || userRole!=='seller' || userRole!=='user'){
    //     logOut()
    //   }
    // }
    // setAuthToken(user,logOut)
      getRole(user?.email)
      .then((data)=>{
        console.log("User Role from sidebar :",data.role)
        setuserRole(data.role)
        if(data.role==null && user){
          logOut()
        }
      })
      .catch(err=>console.log("Error",err))
  },[user])

    return (
        <div className='md:flex relative min-h-screen'>
           <Sidebar userRole={userRole}>

           </Sidebar>
           <div className='bg-[#919499] flex-1'>
           <div className=' p-5'>
            <Outlet>

            </Outlet>
           </div>
           </div>
        </div>
    );
};

export default DashboardLayout;