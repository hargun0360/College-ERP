import React, { useState,useEffect } from 'react'
import { StudentSidebarData } from './StudentSidebarData';
import { AdminSidebarData } from './AdminSidebarData';
import 'boxicons'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import '../Dashboard.css'
import AuthServices from '../../../ApiServices/AuthService'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { flag } from '../../../Service/Action/action';
const Sidebar = () => {
    const my = localStorage.getItem("userd")

    const dispatch = useDispatch();
    const [state,setState]=useState(true);
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        setState(!state);
    }
    useEffect(() => {
        dispatch(flag(active));
    }, [active]);
    const handleInputClick = () => {
        AuthServices.logout();
        navigate("/");
    }
    let user=localStorage.getItem("userd");
    console.log(user);
    return (
        <div className={`sidebar ${active ? "activate" : ""}`}>
            <div class="logo_content" onClick={handleClick}>
                {state ? <box-icon name="menu" id="btn" color="#505050" /> : <box-icon name="left-arrow-alt" id="btn" color="#505050" /> }
            </div>
            <ul className="nav_list">
                {user==="student" ? StudentSidebarData.map((val, key) => {
                    return (
                        <li key={key}>
                            <NavLink exact activeClassName="active" to={`/${my}${val.Link}`} className='linking'>
                                <i>{val.icon}</i>
                                <span className="links_name">{val.title}</span>
                            </NavLink>
                            <span className="tooltip">{val.tooltip}</span>
                        </li>
                    );
                }) : user==="admin" ? AdminSidebarData.map((val,key)=>{
                    return (
                        <li key={key}>
                            <NavLink exact activeClassName="active" to={`/${my}${val.Link}`} className='linking'>
                                <i>{val.icon}</i>
                                <span className="links_name">{val.title}</span>
                            </NavLink>
                            <span className="tooltip">{val.tooltip}</span>
                        </li>
                    );
                }) : null}  
                <li onClick={handleInputClick}>
                    <NavLink exact activeClassName="active" to='/' className='linking'>
                        <i><box-icon name="log-out" color="#505050" /></i>
                        <span className="links_name">Logout</span>
                    </NavLink>
                    <span className="tooltip">Logout</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
