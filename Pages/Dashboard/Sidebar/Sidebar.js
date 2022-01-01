import React,{useState} from 'react'
import { SidebarData } from './SidebarData';
import 'boxicons'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import '../Dashboard.css'
const Sidebar = () => {
    const [active, setActive] = useState(false);
    const handleClick =()=>{
        setActive(!active);
    }
    return (
        <div className={`sidebar ${active ? "active" : ""}`}>
            <div class="logo_content" onClick={handleClick}>
                <box-icon name="menu" id="btn" color="#505050"/>
            </div>
            <ul className="nav_list">
                {SidebarData.map((val,key)=>{
                    return(
                        <li key={key}>
                            <Link to={val.Link} className='linking'>
                                <i>{val.icon}</i>
                                <span className="links_name">{val.title}</span>
                            </Link>
                            <span className="tooltip">{val.tooltip}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar
