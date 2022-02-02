import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import FeedbackStudent from './FeedbackStudent'
const FacFeedback = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <FeedbackStudent />
                </div>
            </div>
        </div>);
};

export default FacFeedback
