import React from 'react'
import './Dashboard.css'
// import Navbar from '../../'
import Sidebar from './Sidebar/Sidebar'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            {/* <Navbar /> */}
            <Sidebar />
        </div>
    )
}

export default Dashboard;
