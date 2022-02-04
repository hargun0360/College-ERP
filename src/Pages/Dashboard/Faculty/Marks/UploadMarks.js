import React, { useEffect, useState } from 'react';
import Navbar from '../../../LandingPage/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import './Marks.css'
import { useDispatch, useSelector } from 'react-redux'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"

const UploadMarks = () => {
    const { val } = useSelector((state) => state.toggle);
    let urlElements = window.location.pathname.split('/');
    let user = urlElements[1];
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userd") === null || localStorage.getItem("userd") !== user) {
            navigate('/');
            localStorage.clear();
        }
    }, [])
    const [tableData, setTableData] = useState([{ id: "1", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "2", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "3", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "4", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "5", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "6", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "7", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "8", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "9", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    { id: "10", roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" }]);
    return (<>
        <div className='dashboard'>
            <Navbar />
            <div className='content'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <div className={`Annoucement-Container ${val ? "activate" : ""}`} >
                        <div className='Batch-Detail'>
                            <div className='dabba1'>
                                <div className='subject'>
                                    <h3>Subject:</h3>
                                </div>
                                <div className='subject-name'>
                                    <h3>Physics</h3>
                                </div>
                            </div>
                            <div className='dabba2'>
                                <div className='batch'>
                                    <h3>Batch:</h3>
                                </div>
                                <div className='batch-name'>
                                    <h3>IT2</h3>
                                </div>
                            </div>
                            <div className='dabba3'>
                                <div className='exam'>
                                    <h3>Exam:</h3>
                                </div>
                                <div className='exam-name'>
                                    <h3>ST1</h3>
                                </div>
                            </div>
                            <div className='dabba4'>
                                <div className='maxi'>
                                    <h3>Maximum Marks:</h3>
                                </div>
                                <div className='maxi-marks'>
                                    <h3>100</h3>
                                </div>
                            </div>
                        </div>
                        <div className='marks-table'>
                            <TableContainer component={Paper} style={{
                                width: val ? "81vw" : "91vw",
                                position: "relative",
                                top: "-2%",
                                height: "62vh",
                                border: "1px solid transparent"

                            }} >
                                <Table style={{ height: "max-content" }} stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ border: "0px solid transparent", width: "20%", fontFamily: "'Inter', sans-serif" }} align='center'>Roll Number</TableCell>
                                            <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Name</TableCell>
                                            <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Email</TableCell>
                                            <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Marks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {
                                            tableData.map((data) => (<>
                                                <TableRow>
                                                    <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.roll}</TableCell>
                                                    <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.name}</TableCell>
                                                    <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.email}</TableCell>
                                                    <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>
                                                        <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer", fontFamily: "'Inter', sans-serif" }} >
                                                            <input id="marks-input" />
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            </>))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default UploadMarks;