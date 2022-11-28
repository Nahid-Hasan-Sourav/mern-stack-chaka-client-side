import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRole } from '../../Api/UserRole';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AdminMenu from '../AdminMenu/AdminMenu';
import BuyersMenu from '../BuyersMenu/BuyersMenu';
import SellerMenu from '../SellerMenu/SellerMenu';
import logo from '../../Logo/Chaka.png'
const Sidebar = ({userRole}) => {
  const {user}=useContext(AuthContext)

  console.log("sidebar",user);
 
    return (
    <div className='lg:w-64 px-4 bg-[#04224d] ' >
            <div class="flex flex-col  py-8 bg-[#04224d] border-r-0">
            <Link className="btn btn-ghost normal-case text-xl text-black" to='/'>
          <figure><img src={logo} alt="Movie"/></figure>
          </Link>

     <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar"
        onError={(e)=>{
            e.currentTarget.src="https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png"
        }}
        />
        <h4 class="mx-2 mt-2 font-medium  fw-bold hover:underline text-white">{user?.displayName}</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-white hover:underline">{user?.email}</p>
        <p class="mx-2 mt-1 text-sm font-medium text-white hover:underline">User Type : {userRole}</p>
        {/* <div className="flex flex-col  mt-6 justify-evenly">
          <Link to='/' className="btn bg-[#E22937] text-white font-bold" type='submit'>Go to home</Link>
                     
      </div> */}
     </div>

     <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
        {
          userRole && userRole==='seller' ? <SellerMenu></SellerMenu> : userRole && userRole==='user' ? <BuyersMenu></BuyersMenu> : userRole && userRole==='admin' ? <AdminMenu></AdminMenu> : ''
        }
        </nav>
     </div>
   </div>
        </div>
    );
};

export default Sidebar;