import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Sidebar = () => {
 const {user}=useContext(AuthContext)
    return (
    <div className='lg:w-64'>
            <div class="flex flex-col  py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
     <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Brand</h2>

     <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar"/>
        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">{user?.email}</p>
        <div className="flex flex-col  mt-6 justify-evenly">
                      <Link to='/' className="btn bg-[#E22937] text-white font-bold" type='submit'>Go to home</Link>
                     
      </div>
     </div>

     <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
          
        </nav>
     </div>
   </div>
        </div>
    );
};

export default Sidebar;