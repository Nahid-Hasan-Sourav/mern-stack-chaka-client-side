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
        </div>
    );
};

export default BuyersMenu;