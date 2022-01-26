import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import profile from '../../../../Assets/Images/Profile.png'
import 'boxicons'
import Chart from "react-apexcharts";
import AuthService from '../../../../ApiServices/AuthService';
const StudentProfile = () => {
    const id = localStorage.getItem("stuid");
    const { val } = useSelector((state) => state.toggle);
    const [image, setImage] = useState(profile);
    const [preview, setPreview] = useState(profile);
    const [att,setAtt] = useState("");
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [roll,setRoll] = useState("");
    const [sem,setSem] = useState("");
    const [address,setAddress] = useState("");
    const [mobile,setMobile] = useState("");
    const [father,setFather] = useState("");
    const [mother,setMother] = useState("");
    const [year,setYear] = useState("");
    const [branch,setBranch] = useState("");
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        loadStudent();
    },[]);

    const loadStudent = async ()=> {
        try {
            const res = await AuthService.getEachStudent(id);
            console.log(res);
            setAtt(res.data.att);
            setEmail(res.data.profile.email)
            setName(res.data.profile.fullname)
            setRoll(res.data.profile.rollno)
            setSem(res.data.profile.sem)
            setAddress(res.data.profile.address)
            setMobile(res.data.profile.mobileno)
            setFather(res.data.profile.father)
            setMother(res.data.profile.mother)
            setYear(res.data.profile.year)
            setBranch(res.data.profile.branch)
            setImage(res.data.profile.image)
            setFlag(true)
        } catch (error) {
            console.log(error);
        }
        
    }
    const option = {
        series: [80],
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
                        offsetY: 10,
                        color: "#1E637E",
                        fontSize: "35px",
                        show: true
                    }
                },
            },
            
        },
        fill: {
            colors: ['#1E637E'],
        }
    }
    return (<>

        <div className={`Annoucement-Container ${val ? "activate" : ""}`}>
            <div className='Personal-year'>
                <div className='Personal-info'>
                    <div className='Personal-details'>
                        <div className='Personal-detail-heading'>
                            <h5>Personal Details</h5>
                        </div>
                        <div className='Info'>
                            <div className='Avatar-Image'>
                                <img id='Avatar-img' src={flag ? `https://ourcollege.herokuapp.com/${image}` : preview} alt="Avatar Preview" />
                            </div>
                            <div className='Student-Details'>
                                <div className='Name'>
                                    <h6>{name}</h6>
                                </div>
                                <div className='Email'>
                                    <h6>{email}</h6>
                                </div>
                                <div className='Branch'>
                                    <h6>{branch}</h6>
                                </div>
                                <div className='Mobile'>
                                    <h6>{mobile}</h6>
                                </div>
                                <div className='Roll-Number'>
                                    <h6>{roll}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='Circular-design'>

                        </div>
                    </div>
                    <div className='Year-info'>
                        <div className='Semester-year'>
                            <h5>{sem} Semester</h5>
                        </div>
                        <div className='circular-year'>

                        </div>
                        <div className='year-number'>
                            <h1>{year}</h1>
                            <h5>Year</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Additional-Attendance'>
                <div className='Additional-info'>
                    <div className='Additional-Info-heading'>
                        <h5>Additional Information</h5>
                    </div>
                    <div className='Additional-personal-details'>
                        <div className='Info-Heading'>
                            <div className="FatherName-Heading">
                                <h5>Fathers Name :</h5>
                            </div>
                            <div className="MotherName-Heading">
                                <h5>Mothers Name :</h5>
                            </div>
                            <div className="AddressName-Heading">
                                <h5>Address :</h5>
                            </div>
                        </div>
                        <div className='Info-Details'>
                            <div className="Father-name">
                                <h5>{father}</h5>
                            </div>
                            <div className='Mother-name'>
                                <h5>{mother}</h5>
                            </div>
                            <div className='Address-name'>
                            <h5>{address}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Attendance-info'>
                    <div className='Attendance'>
                        <div className='Attendance-heading'>
                            <h5>Attendance</h5>
                        </div>
                        <div className='Attendance-favi'>
                        <box-icon name='chevron-right' color="#1E637E" ></box-icon>
                        </div>
                    </div>
                    <div className='Attendance-circular-bar'>
                    <Chart options={option} series={option.series} type="radialBar" height={250} />;
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default StudentProfile
