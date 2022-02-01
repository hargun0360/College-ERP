import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import GiveFeedback from './GiveFeedback'
const Feedback = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <GiveFeedback />
                </div>
            </div>
        </div>);
};

export default Feedback;
