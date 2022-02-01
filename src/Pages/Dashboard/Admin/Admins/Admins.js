import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import AdminsData from './AdminsData'
import './Admins.css'
const Admins = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <AdminsData />
                </div>
            </div>
        </div>);
};

export default Admins;
