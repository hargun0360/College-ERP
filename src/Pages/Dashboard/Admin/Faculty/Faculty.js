import React,{useEffect} from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import ViewFaculty from './ViewFaculty'
import '../Admins/Admins.css'
import { useNavigate } from 'react-router-dom';
const Faculty = () => {
    let urlElements = window.location.pathname.split('/');
    let user = urlElements[1];
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("userd") === null || localStorage.getItem("userd") !== user){
            navigate('/');
            localStorage.clear();
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
                    <ViewFaculty />
                </div>
            </div>
        </div>);
};

export default Faculty;
