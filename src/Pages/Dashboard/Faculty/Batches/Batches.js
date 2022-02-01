import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import FacultyProfile from './FacultyProfile'
const FacProfile = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <FacultyProfile />
                </div>
            </div>
        </div>);
};

export default FacProfile
