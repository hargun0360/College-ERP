import React,{useEffect} from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import GiveFeedback from './GiveFeedback'
import { useNavigate } from 'react-router-dom';
const Feedback = () => {
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
                    <GiveFeedback />
                </div>
            </div>
        </div>);
};

export default Feedback;
