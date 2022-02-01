import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import Timetables from './Timetables'
import '../Admins/Admins.css'
const TimeTable = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Timetables />
                </div>
            </div>
        </div>);
};

export default TimeTable;
