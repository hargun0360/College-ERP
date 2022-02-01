import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import StudentAttendance from './StudentAttendance'
const Attandance = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <StudentAttendance />
                </div>
            </div>
        </div>);
};

export default Attandance;
