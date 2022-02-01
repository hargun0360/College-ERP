import React from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import Feedbacks from './Feedbacks'
import '../Admins/Admins.css'
const Feedback = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Feedbacks />
                </div>
            </div>
        </div>);
};

export default Feedback;
