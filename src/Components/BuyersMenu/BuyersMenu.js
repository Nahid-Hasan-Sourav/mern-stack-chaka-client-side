import React from 'react';
import { Link } from 'react-router-dom';

const BuyersMenu = () => {
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