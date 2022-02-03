import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import MarkAttendance from './MarkAttendance'
const FacAttendance = () => {
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
                    <MarkAttendance />
                </div>
            </div>
        </div>);
};

export default FacAttendance
