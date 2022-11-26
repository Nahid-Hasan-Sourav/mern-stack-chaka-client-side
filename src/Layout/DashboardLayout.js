import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dasgboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='md:flex relative min-h-screen'>
           <Sidebar>

           </Sidebar>
           <div className='bg-red-400 flex-1'>
           <div className='p-5'>
            <Outlet>

            </Outlet>
           </div>
           </div>
        </div>
    );
};

export default DashboardLayout;