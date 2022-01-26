import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'boxicons'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import './Batches.css'
import AddBatch from './AddBatch'
import  {  useNavigate  } from 'react-router-dom'
import EditDetails from './EditDetails'
import AuthService from '../../../../ApiServices/AuthService';
const AdminBatches = () => {
    const { val } = useSelector((state) => state.toggle);
    const [year, setYear] = useState(null);
    const [flag1, setFlag1] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [batch, setBatch] = useState(null);
    const [tableData, setTableData] = useState([])
    const navigate = useNavigate();
    const [flag, setFlag] = useState(true);
    const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
    const [batches , setBatches] = useState([]);
    const handleYearDropdown = (e) => {
        setYear(e.target.value);
        console.log(e.target.value);
        setFlag(false);
    }
    const handleBatch = (e) =>{
        e.preventDefault();
        setBatch(e.target.value);
        setFlag1(true);
    }
    const handleEditDetails =  (id) =>{
        console.log(id);
        setFlag2(true);
    }
    const handleBatchDropdown = (e) => {
        setBatch(e.target.value);
    }

    const handleView = (id) => {
        localStorage.setItem("stuid",id);
        navigate("/Dashboard/stuProfile");
    }

    const handleDelete = (id) => {
        setTrigger(true);
        AuthService.DelStudent(id)
            .then((res)=>{
                console.log(res);
                setTrigger(FontFaceSetLoadEvent);
            }).catch((e)=>{
                console.log(e);
            })
    }
    useEffect(()=>{
        loadBatch();
     },[trigger]);

    const handleApply = (e) =>{
        e.preventDefault();
        if(year && batch){

        
            AuthService.getStudents(batch,year)
            .then((res)=>{
                console.log(res);
                setTableData(res.data.students);
            }).catch((e)=>{
                console.log(e);
            })
        }else{
            // show error
        }
    }

    useEffect(()=>{
        loadBatch();
    },[year]);

    const loadBatch = async ()=> {
        try {
            const res = await AuthService.getBatch(year);
            setBatches(res.data);
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className={`Admin-Container ${val ? "activate" : ""}`}>
        {
            <AddBatch trigger={flag1} setTrigger={setFlag1} />
        }
        {
            <EditDetails trigger={flag2} setTrigger={setFlag2} />
        }
            <div className='Batches-Details'>
                <div className='Year-Dropdown'>
                    <select id="year-drop" onChange={handleYearDropdown}>
                        <option selected="selected" hidden>Select Year</option>
                        {
                            years.map((y) => (
                                <option key={y.id} name={y.id} value={y.id}>{y.yr}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='Batch-Dropdown'>
                    <select id="batch-drop" disabled={flag} onChange={handleBatchDropdown}>
                        <option selected="selected" hidden>Select Batch</option>
                        {
                            batches.map((b) => (
                                <option key={b._id} name={b._id} value={b._id}>{b._id}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='Apply-Button' onClick={handleApply}>
                    <div className='Apply-text'>
                        <h4>Apply</h4>
                    </div>
                </div>
                <div className='Add-Batch' onClick={handleBatch}>
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
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.roll}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.name}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'>{data.email}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer",fontFamily:"'Inter', sans-serif"  }} onClick={()=>handleEditDetails(data._id)}>
                                                <h6>Edit details</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ border: "0px solid transparent" }} align='center'>
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer",fontFamily:"'Inter', sans-serif" }} onClick={()=>handleView(data._id)} >
                                                <h6>View</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ border: "0px solid transparent" }} align='center' onClick={()=>handleDelete(data._id)}>
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
