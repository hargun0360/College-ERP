import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'boxicons'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import './Batches.css'
const AdminBatches = () => {
    const { val } = useSelector((state) => state.toggle);
    const [year, setYear] = useState(null);
    const [batch, setBatch] = useState(null);
    const [tableData, setTableData] = useState([{ Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }, { Roll: "2000270100095", Name: "Manish", Email: "Manish@akgec.ac.in" }])
    const [flag, setFlag] = useState(true);
    const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
    const batches = [{ id: "1", batch: "CSE" }, { id: "2", batch: "IT" }, { id: "3", batch: "ECE" }, { id: "4", batch: "EN" }];
    const handleYearDropdown = (e) => {
        setYear(e.target.value);
        setFlag(false);
    }
    const handleBatchDropdown = (e) => {
        setBatch(e.target.value);
    }
    if (year) {
        console.log(year);
    }
    if (batch) {
        console.log(batch);
    }
    return (
        <div className={`Admin-Container ${val ? "activate" : ""}`}>
            <div className='Batches-Details'>
                <div className='Year-Dropdown'>
                    <select id="year-drop" onChange={handleYearDropdown}>
                        <option selected="selected" hidden>Select Year</option>
                        {
                            years.map((y) => (
                                <option key={y.id} name={y.id} value={y.yr}>{y.yr}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='Batch-Dropdown'>
                    <select id="batch-drop" disabled={flag} onChange={handleBatchDropdown}>
                        <option selected="selected" hidden>Select Batch</option>
                        {
                            batches.map((b) => (
                                <option key={b.id} name={b.id} value={b.batch}>{b.batch}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='Apply-Button'>
                    <div className='Apply-text'>
                        <h4>Apply</h4>
                    </div>
                </div>
                <div className='Add-Batch'>
                    <div className='Batch-text'>
                        <h4>Add Batch</h4>
                    </div>
                </div>
            </div>
            <div className='Add-Student'>
                <div className='plus-icon'>
                    <box-icon name='plus-circle' color="#007BAB" ></box-icon>
                </div>
                <div className='Add-Student-text'>
                    <h4>Add student</h4>
                </div>
            </div>
            <div className='Student-Info-Table'>

                <TableContainer component={Paper} style={{
                    width: val ? "81vw" : "91vw",
                    position: "relative",
                    top: "10%",
                    height:"80vh"

                }} >
                    <Table style={{height: "max-content"}} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: "0px solid transparent", width: "20%",fontFamily:"'Inter', sans-serif"  }} align='center'>Roll Number</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Name</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Email</TableCell>
                                <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'></TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'></TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                tableData.map((data) => (<>
                                    <TableRow>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.Roll}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.Name}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'>{data.Email}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer",fontFamily:"'Inter', sans-serif"  }}>
                                                <h6>Edit details</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ border: "0px solid transparent" }} align='center'>
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer",fontFamily:"'Inter', sans-serif" }}>
                                                <h6>View</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ border: "0px solid transparent" }} align='center'>
                                            <div className='trash-icon' style={{cursor:"pointer"}}>
                                                <box-icon color="red" name='trash-alt' />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>);
};

export default AdminBatches;
