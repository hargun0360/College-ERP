import React from 'react'
import '../../Dashboard.css'
import Navbar from '../../../LandingPage/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import Holidays from './Holidays'
const Holiday = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Holidays />
                </div>
            </div>
        </div>
    )
}

export default Holiday;

