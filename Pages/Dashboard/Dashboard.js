import React from 'react'
import './Dashboard.css'
import Navbar from '../../Pages/LandingPage/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { AdminDashboard } from './Admin/AdminDashboard'
const Dashboard = () => {
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
