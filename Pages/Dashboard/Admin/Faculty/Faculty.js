import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import ViewFaculty from './ViewFaculty'
import '../Admins/Admins.css'
const Faculty = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <ViewFaculty />
                </div>
            </div>
        </div>);
};

export default Faculty;
