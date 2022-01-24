import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import profile from '../../../../Assets/Images/Profile.png'
import 'boxicons'
import Chart from "react-apexcharts";
const StudentProfile = () => {
    const { val } = useSelector((state) => state.toggle);
    const [image, setImage] = useState(profile);
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
                                <img id='Avatar-img' src={image} alt="Avatar Preview" />
                            </div>
                            <div className='Student-Details'>
                                <div className='Name'>
                                    <h6>Hargun Singh</h6>
                                </div>
                                <div className='Email'>
                                    <h6>Hargun2013021@akgec.ac.in</h6>
                                </div>
                                <div className='Branch'>
                                    <h6>Information Technology</h6>
                                </div>
                                <div className='Mobile'>
                                    <h6>7985719583</h6>
                                </div>
                                <div className='Roll-Number'>
                                    <h6>2000270130065</h6>
                                </div>
                            </div>
                        </div>
                        <div className='Circular-design'>

                        </div>
                    </div>
                    <div className='Year-info'>
                        <div className='Semester-year'>
                            <h5>Third Semester</h5>
                        </div>
                        <div className='circular-year'>

                        </div>
                        <div className='year-number'>
                            <h1>2</h1>
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
                                <h5>Ajeet Singh</h5>
                            </div>
                            <div className='Mother-name'>
                                <h5>Jasmeet Kaur</h5>
                            </div>
                            <div className='Address-name'>
                            <h5>118/548 'A', KaushalPuri,Kanpur</h5>
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
