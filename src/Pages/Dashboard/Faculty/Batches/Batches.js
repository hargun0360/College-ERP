import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import ViewBatches from './ViewBatches'
const FacBatch = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <ViewBatches />
                </div>
            </div>
        </div>);
};

export default FacBatch
