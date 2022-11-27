import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SellerMenu = () => {
    const {user}=useContext(AuthContext)
    console.log("From Seller Menu",user);
    return (
        <div>
             <button className="btn block w-full"  to='my-orders'>
             <Link to='/dashboard/seller/add-a-products'>
               Add A Products
             </Link>          
            </button>
             <button className="btn block w-full my-4"  to='my-orders'>
             <Link to={`/dashboard/seller/my-products/${user.email}`}>
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