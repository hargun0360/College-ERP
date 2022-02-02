import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import FacultyAnnoucement from './FacultyAnnoucement'
const FacAnnoucement = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <FacultyAnnoucement />
                </div>
            </div>
        </div>);
};

export default FacAnnoucement;
