import React, { useState } from 'react'
import profile from '../../../Assets/Imagesused/Profile.png'
import 'boxicons'
import './AdminDashboard.css'
import { useSelector,useDispatch} from 'react-redux'
import Chart from "react-apexcharts";
import AdminDetailForm from './AdminDetailForm'
import Spinner from '../../../Components/UI/Spinner/Spinner'
import * as actionCreators from "../../../Service/Action/action";
export const AdminDashboard = () => {
    const { val } = useSelector((state) => state.toggle);
    const dispatch = useDispatch();
    const { loading, admin } = useSelector((state) => state.getAdmin);
    const [flag, setFlag] = useState(false);
    const [avatar, setAvatar] = useState(profile);
    const [avatarPreview, setAvatarPreview] = useState(profile);
    const handleClick = (e) => {
        e.preventDefault();
        setFlag(true);
        dispatch(actionCreators.getAdminDetail());
    }
    const option = {
        series: [70],
        chart: {
            height: 200,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 10,
                    size: '55%',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        color: "#111",
                        fontSize: "35px",
                        show: true
                    }
                },
            },
        },
    }
    const [value, setValue] = useState(false);
    const [state, setState] = useState(true);
    const handleHoverin = () => {
        setValue(true);
    }
    const handleHoverout = () => {
        setValue(false);
    }
    const changeProfile = () => {
        setState(false);
    }
    const handleChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        setState(true);
    }

    return loading ? (<Spinner />) : (<>

        {
            <AdminDetailForm trigger={flag} setTrigger={setFlag} profileImage={avatar} />
        }
        <div className={`Admin-Container ${val ? "activate" : ""}`}>
            <div className='Admin-Profile-Box'>
                <div className='profile-box1'>
                    <div className='profile-image-box' onMouseEnter={handleHoverin} onMouseLeave={handleHoverout}>
                        <img src={avatarPreview} alt="Avatar Preview" />
                        {
                            value ? <div className='Edit-profile' onClick={changeProfile}>
                                <box-icon id="camera-icon" type="solid" name='camera'>
                                </box-icon>
                            </div> : null
                        }
                        {
                            state && <input className="file-input" title="" type="file" name='avatar' accept="image/*" multiple="false" onChange={handleChange} />
                        }

                    </div>
                    <div className='Admin-basic-details'>
                        <div className='Admin-name'>
                            <h2>{admin.profile.fullname}</h2>
                        </div>
                        <div className='Admin-post'>
                            <h4>{admin.profile.degree}</h4>
                        </div>
                    </div>
                </div>
                <div className='profile-box2'>
                    <div className='Admin-email'>
                        <div className='email-favi'>
                            <box-icon type='solid' name='envelope'></box-icon>
                        </div>
                        <div className='email-add'>
                            <h4>{admin.profile.email}</h4>
                        </div>
                    </div>
                    <div className='Admin-mobile'>
                        <div className='call-favi'>
                            <box-icon type='solid' name='phone-call'></box-icon>
                        </div>
                        <div className='call-number'>
                            <h4>{admin.profile.mobile}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='College-basic-data'>
                <div className='box-1'>
                    <div className='student-favi'>
                        <i class='fas fa-user-graduate'></i>
                    </div>
                    <div className='Total-student'>
                        <h3>{admin.studentNo}</h3>
                    </div>
                    <div className='Students-name'>
                        <h5>Students</h5>
                    </div>
                    <div className='circular1'>

                    </div>
                </div>
                <div className='box-2'>
                    <div className='faculty-favi'>
                        <i class='fas fa-user-check'></i>
                    </div>
                    <div className='Total-faculty'>
                        <h3>{admin.facultyNo}</h3>
                    </div>
                    <div className='Faculty-name'>
                        <h5>Faculty</h5>
                    </div>
                    <div className='circular2'>

                    </div>
                </div>
                <div className='box-3'>
                    <div className='calendar-favi'>
                        <i class='fas fa-calendar'></i>
                    </div>
                    <div className='Holiday-date'>
                        <h3>26</h3>
                        <span className='prefix'>th</span>
                        <span className='month-cal'>jan</span>
                    </div>
                    <div className='upcoming-Holiday'>
                        <h5>Upcoming Holiday</h5>
                    </div>
                    <div className='circular3'>

                    </div>
                </div>
                <div className='box-4'>
                    <Chart options={option} series={option.series} type="radialBar" height={310} />;
                </div>
            </div>
            <div className='Edit' onClick={handleClick}>
                <div className='Edit-detail'>
                    <h5>Edit details</h5>
                </div>
                <div className='Edit-favicon'>
                    <i class='fas fa-edit'></i>
                </div>
            </div>
        </div>
    </>)
}