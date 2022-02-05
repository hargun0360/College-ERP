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
    const arr=[{}]
    const handleSubmit = () =>{
        console.log(arr);
    }
    const [tableData, setTableData] = useState([{ roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" },
    {  roll: "2000270130065", name: "hargun", email: "hargun2013021@akgec.ac.in" }]);
    const [values,setValues] = useState(new Array(tableData.length).fill(''))
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
                                border: "1px solid #F2F2F2"


                            }} >
                                <Table style={{ height: "max-content" }} stickyHeader>
                                    <TableHead>
                                        <TableRow >
                                            <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Roll Number</TableCell>
                                            <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Name</TableCell>
                                            <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Email</TableCell>
                                            <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Marks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {
                                            tableData.map((data,index) => (<>
                                                <TableRow >
                                                    <TableCell key={index} style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.roll}</TableCell>
                                                    <TableCell key={index} style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.name}</TableCell>
                                                    <TableCell key={index} style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.email}</TableCell>
                                                    <TableCell key={index} style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>
                                                        <input key={index} type={"text"} style={{ border: "1px solid black", width: "66px", height: "32px", background: "#F2F2F2", paddingLeft: "5px" }} required value={values[index]} onChange={(e)=>{
                                                            setValues(e.target.value)
                                                        }} />
                                                    </TableCell>
                                                </TableRow>
                                            </>))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="upload-btn" onClick={handleSubmit}>
                            <div className='Apply-text'>
                                <h4>Upload</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default UploadMarks;