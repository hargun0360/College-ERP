import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import ViewAnnoucements from './ViewAnnoucements'
const Annoucement = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <ViewAnnoucements />
                </div>
            </div>
        </div>);
};

export default Annoucement;
