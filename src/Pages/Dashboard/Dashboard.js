import React,{useEffect} from 'react';
import './Dashboard.css'
import Navbar from '../../Pages/LandingPage/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { AdminDashboard } from './Admin/AdminDashboard'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
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
                    <AdminDashboard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
