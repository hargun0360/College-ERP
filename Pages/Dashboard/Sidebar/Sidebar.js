import React, { useState } from 'react'
import { SidebarData } from './SidebarData';
import 'boxicons'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import '../Dashboard.css'
import AuthServices from '../../../ApiServices/AuthService'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    const handleInputClick = () => {
        AuthServices.logout();
        navigate("/");
    }
    return (
        <div className={`sidebar ${active ? "activate" : ""}`}>
            <div class="logo_content" onClick={handleClick}>
                <box-icon name="menu" id="btn" color="#505050" />
            </div>
            <ul className="nav_list">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}>
                            <NavLink exact activeClassName="active" to={val.Link} className='linking'>
                                <i>{val.icon}</i>
                                <span className="links_name">{val.title}</span>
                            </NavLink>
                            <span className="tooltip">{val.tooltip}</span>
                        </li>
                    );
                })}
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
