import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div>
            <button className="btn block w-full"  to='my-orders'>
             <Link to='/dashboard/admin/All-Sellers'>
               All Sellers
             </Link>          
            </button>
             <button className="btn block w-full my-4"  to='my-orders'>
             <Link to='/dashboard/admin/All-Buyers'>
              All Buyers
             </Link>      
            </button>
        </div>
    );
};

export default AdminMenu;