import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import * as actionCreators from "../../Service/Action/action";
import './LandingPage.css'
const Modal = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (e)=>{
            e.preventDefault();
            props.setTrigger(false);
    }
    return (props.trigger) ? (
        <div className='Modal-box1'>
            <div className='Modal-container'>
                <div className='Modal-heading'>
                    <h2>Continue as</h2>
                </div>
                <div className='box1' onClick={(e) => {
                    e.preventDefault();
                    let user;
                    user="student"
                    dispatch(actionCreators.user(user));
                    localStorage.setItem("userd", user);
                    navigate('/Login');
                }}>
                    <div className='graduation-cap'>
                        <i id="ph-student" className="fa fa-user-graduate icon"></i>
                    </div>
                    <div className='Student'>
                        <h2>Student</h2>
                    </div>
                </div>
                <div className='box2' onClick={(e) => {
                    e.preventDefault();
                    let user;
                    user="faculty"
                    dispatch(actionCreators.user(user));
                    localStorage.setItem("userd", user);
                    navigate('/Login');
                }}>
                    <div className='teacher'>
                        <i id="teacher-chalkboard" className="fa fa-chalkboard-teacher icon"></i>
                    </div>
                    <div className='Faculty'>
                        <h2>Faculty</h2>
                    </div>
                </div>
                <div className='box3' onClick={(e) => {
                    e.preventDefault();
                    let user;
                    user="admin"
                    dispatch(actionCreators.user(user));
                    localStorage.setItem("userd", user);
                    navigate('/Login');
                }}>
                    <div className='admin'>
                        <i id="user-admin" className="fa fa-user-check"></i>
                    </div>
                    <div className='Admin'>
                        <h2>Admin</h2>
                    </div>
                </div>
                <div className='cross'>
                <i id="crossed" className="fa fa-times" onClick={handleClick}></i>
                </div>
            </div>
        </div>
    ):null;
}

export default Modal
