import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import StudentProfile from './StudentProfile';
const Profile = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <StudentProfile />
                </div>
            </div>
        </div>);
};

export default Profile;
