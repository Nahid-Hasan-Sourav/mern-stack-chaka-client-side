import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <div>
             <button className="btn block w-full"  to='my-orders'>
             <Link to='/dashboard/seller/add-a-products'>
               Add A Products
             </Link>          
            </button>
             <button className="btn block w-full my-4"  to='my-orders'>
             <Link to='/dashboard/seller/my-products'>
               My Products
             </Link>      
            </button>
             <button className="btn block w-full"  to='my-orders'>
             <Link to='/dashboard/seller/my-buyers'>
               My Buyers
             </Link>    
            </button>        
        </div>
    );
};

export default SellerMenu;