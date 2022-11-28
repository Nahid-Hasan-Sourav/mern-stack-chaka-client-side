import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BuyersMenu = () => {
    const user=useContext(AuthContext)
    console.log("My products user email",user.user.email)
    return (
        <div>
            <button className="btn block w-full"  to='my-orders'>
             <Link to={`/dashboard/my-orders/${user.user.email}`}>
             My Orders
             </Link>
            
            </button>
            <button className="btn block w-full my-4"  to='my-orders'>
             <Link to={`/dashboard/wishlist/${user.user.email}`}>
             My Wishlist
             </Link>
            
            </button>
        </div>
    );
};

export default BuyersMenu;