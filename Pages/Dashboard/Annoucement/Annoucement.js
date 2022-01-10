import React from 'react'
import '../Dashboard.css'
import Navbar from '../../LandingPage/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import AdminAnnoucement from './AdminAnnoucement'
const Annoucement = () => {
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

