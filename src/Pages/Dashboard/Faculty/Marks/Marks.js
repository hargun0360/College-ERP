import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import GiveMarks from './GiveMarks'
const Marks = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <GiveMarks />
                </div>
            </div>
        </div>);
};

export default Marks
