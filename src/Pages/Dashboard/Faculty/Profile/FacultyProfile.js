import React, { useEffect, useState } from 'react'
import profile from '../../../../Assets/Images/Profile.png'
import 'boxicons'
import Chart from "react-apexcharts";
import AuthService from '../../../../ApiServices/AuthService'
import * as actionCreators from "../../../../Service/Action/action";
import '../../Admin/AdminDashboard.css'
import Spinner from '../../../../Components/UI/Spinner/Spinner'
import './Profile.css'
import EditProfile from './EditProfile'
import { useDispatch, useSelector } from 'react-redux'
const FacultyProfile = () => {
  const { val } = useSelector((state) => state.toggle);
  const user = localStorage.getItem("userd");
  const useride = localStorage.getItem("userid");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [mobile, setMobile] = useState("");
  const [degree, setDegree] = useState("");
  const [stun, setStun] = useState("");
  const [facn, setFacn] = useState("");
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(profile)
  const id = localStorage.getItem("useride");
  const loadAdmin = async () => {
    try {
      const res = await AuthService.getEachFaculty(id ? id : useride)
      console.log(res);
      if (res) {
        setLoading(false)
      }
      setName(res.data.profile.fullname);
      setEmail(res.data.profile.email);
      setMobile(res.data.profile.mobile);
      setDegree(res.data.profile.degree);
      setImage(res.data.profile.image)
      setStun(res.data.studentNo)
      setFacn(res.data.facultyNo)
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    loadAdmin();
  }, []);
  const dispatch = useDispatch();
  const { x } = useSelector((state) => state.updateToggle);
  console.log(x);
  useEffect(() => {
    loadAdmin();
  }, [x]);
  const [flag, setFlag] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFlag(true);
    dispatch(actionCreators.update(false))
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


  return loading ? (<Spinner />) : (<>
    {
      <EditProfile trigger={flag} setTrigger={setFlag} />
    }
    <div className={`Admin-Container ${val ? "activate" : ""}`} >
      <div className='Admin-Profile-Box'>
        <div className='profile-box1'>
          <div className='profile-image-box'>
            <img src={image ? `https://ourcollege.herokuapp.com/${image}` : preview} alt="Avatar" />
          </div>
          <div className='Admin-basic-details'>
            <div className='Admin-name'>
              <h2>Mohit</h2>
            </div>
            <div className='Admin-post'>
              <h4>Btech,IT</h4>
            </div>
          </div>
        </div>
        <div className='profile-box2'>
          <div className='Admin-email'>
            <div className='email-favi'>
              <box-icon type='solid' name='envelope'></box-icon>
            </div>
            <div className='email-add'>
              <h4>mohit@akgec.ac.in</h4>
            </div>
          </div>
          <div className='Admin-mobile'>
            <div className='call-favi'>
              <box-icon type='solid' name='phone-call'></box-icon>
            </div>
            <div className='call-number'>
              <h4>9956118028</h4>
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
            <h3>{stun}</h3>
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
            <h3>{facn}</h3>
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
      {user === "faculty" ? <div className='Edit' onClick={handleClick}>
        <div className='Edit-detail'>
          <h5>Edit details</h5>
        </div>
        <div className='Edit-favicon'>
          <i class='fas fa-edit'></i>
        </div>
      </div> : null}
    </div>
  </>);
};

export default FacultyProfile