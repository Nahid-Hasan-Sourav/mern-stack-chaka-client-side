
import { Link } from 'react-router-dom';
import logo from '../../../Logo/Chaka.png'
import { FaBars } from 'react-icons/fa';



const Navbar = () => {
   
    const menuItem = (
      <>
        <li className="text-black">
          <Link to="/home" className='text-white'>Home</Link>
        </li>
        <li className="text-black">
          <Link to="/appoinment" className='text-white'>Appoinment</Link>
        </li>
        <li className="text-black">
          <Link to="/about" className='text-white'>About</Link>
        </li>
        <li className="text-black">
          <Link to="/about" className='text-white'>Reviews</Link>
        </li>
       
       
        {/* <li className='text-black'>
           
          </li> */}
      </>
    );

    return (
        <div className="navbar bg-[#052046] drop-shadow-md top-0 sticky z-10 flex justify-between px-4">
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
          <Link className="btn btn-ghost normal-case text-xl text-black">
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