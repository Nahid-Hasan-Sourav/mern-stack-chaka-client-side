import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BuyersMenu = () => {
    const user=useContext(AuthContext)
    return (
        <div>
            <button className="btn block w-full"  to='my-orders'>
             <Link to='/dashboard/my-orders'>
             My Orders
             </Link>
            </button>
        </div>
    );
};

export default BuyersMenu;