import React,{useEffect} from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import FeedbackStudent from './FeedbackStudent'
import { useNavigate } from 'react-router-dom';
const FacFeedback = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("userd") === null || localStorage.getItem("userd") === undefined){
            navigate('/');
        }
    },[])
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
