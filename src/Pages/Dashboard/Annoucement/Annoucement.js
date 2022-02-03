import React,{useEffect} from 'react';
import '../Dashboard.css'
import Navbar from '../../LandingPage/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import AdminAnnoucement from './AdminAnnoucement'
import { useNavigate } from 'react-router-dom'
const Annoucement = () => {
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
                    <AdminAnnoucement />
                </div>
            </div>
        </div>
    )
}

export default Annoucement;

