import React, { useState } from 'react'
import avatarPreview from '../../../Assets/Imagesused/Profile.png'
import 'boxicons'
import './AdminDashboard.css'
import { useSelector } from 'react-redux'
export const AdminDashboard = () => {
    const { val } = useSelector((state) => state.toggle);
    console.log(val);
    return (
        <div className={`Admin-Container ${val ? "activate" : ""}`}>
            <div className='Admin-Profile-Box'>
                <div className='profile-box1'>
                    <div className='profile-image-box'>
                        <img src={avatarPreview} alt="Avatar Preview" />
                    </div>
                    <div className='Admin-basic-details'>
                        <div className='Admin-name'>
                            <h2>Santosh Kumar Singh</h2>
                        </div>
                        <div className='Admin-post'>
                            <h4>Head of Department of
                                Computer science</h4>
                        </div>
                    </div>
                </div>
                <div className='profile-box2'>
                    <div className='Admin-email'>
                        <div className='email-favi'>
                            <box-icon type='solid' name='envelope'></box-icon>
                        </div>
                        <div className='email-add'>
                            <h4>santosh20166@gmail.com</h4>
                        </div>
                    </div>
                    <div className='Admin-mobile'>
                        <div className='call-favi'>
                            <box-icon type='solid' name='phone-call'></box-icon>
                        </div>
                        <div className='call-number'>
                            <h4>8134527267</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
