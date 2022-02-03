import React,{useEffect} from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import AdminBatches from './AdminBatches';
import { useNavigate } from 'react-router-dom';
const Batches = () => {
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
                    <AdminBatches />
                </div>
            </div>
        </div>);
};

export default Batches;
