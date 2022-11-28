
import { Link } from 'react-router-dom';
import logo from '../../../Logo/Chaka.png'
import carLogo from '../../../Logo/Car.png'
import { FaBars } from 'react-icons/fa';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Navbar = () => {
   const {user,logOut}=useContext(AuthContext)

   const handleLogout=()=>{
    logOut().then(()=>{})
    .catch(err=>console.error(err))
   }
    const menuItem = (
      <>
        <li className="text-black">
          <Link to="/" className='text-white'>Home</Link>
        </li>
        {
          user?.uid && <li className="text-black">
          <Link to="/dashboard" className='text-white'>Dashboard</Link>
        </li>
        }
        <li className="text-black">
          <Link to="/blog" className='text-white'>Blog</Link>
        </li>
        {
          user?.uid ?
         <React.Fragment>
           <li className="text-black btn bg-[#E22937]">
          <Link className='text-white' onClick={handleLogout}>Logout</Link>
         </li>
          
         </React.Fragment>
        :
        <li className="text-black btn bg-[#E22937]">
        <Link to="/login" className='text-white'>Login</Link>
      </li>
        }
        


       
       
       
        {/* <li className='text-black'>
           
          </li> */}
      </>
    );
    // #FFA836
    return (
        <div className="navbar bg-[#052046] drop-shadow-md top-0 sticky z-10 flex justify-between px-4 py-5">
          {/* this for md devices and small devices start here */}
        <div className="navbar-start bg-[#052046] ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn  lg:hidden">
            
              <FaBars className='text-3xl' />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#052046] rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl text-black" to='/'>
          <figure><img src={logo} alt="Movie"/></figure>
          </Link>
        </div>
        {/* this for md devices and small devices end here */}

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 items-center">
        
          {menuItem}
          
          </ul>
        </div>
        {/* <div className="navbar-end">
          <Link className="btn">Login</Link>
        </div> */}
      </div>
    );
};

export default Navbar;