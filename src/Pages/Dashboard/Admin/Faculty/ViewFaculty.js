import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'boxicons'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import '../Admins/Admins.css'
import AddFaculty from './AddFaculty';
import { useNavigate } from 'react-router-dom'
import EditFacultyDetails from './EditFacultyDetails'
import AuthServices from '../../../../ApiServices/AuthService'
import * as actionCreators from '../../../../Service/Action/FacultyAction'

const ViewFaculty = () => {
    const { val } = useSelector((state) => state.toggle);
    const { view, del, add } = useSelector((state) => state.faculty)
    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false);
    const [tableData, setTableData] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        loadFaculty();
    }, []);
    useEffect(() => {
        loadFaculty();
    }, [view, del, add]);

    const loadFaculty = async () => {
        await AuthServices.getFaculty()
            .then((res) => {
                console.log(res);
                setTableData(res.data);
            }).catch((e) => {
                console.log(e);
            })
    }

    const handleView = (id) => {
        localStorage.setItem("useride", id);
        navigate("/faculty/Dashboard/profile");
        console.log(id)
    }
    const handleDelete = (id) => {
        dispatch(actionCreators.deleteFaculty(false))
        console.log(id);
        // res true
    }
    const handleEditDetails = (id) => {
        console.log(id);
        setFlag1(true);
        localStorage.setItem("facid", id)
        dispatch(actionCreators.editFaculty(false));
    }
    const handleMakeAdmin = (id) => {
        console.log(id);
    }
    const handleFaculty = () => {
        dispatch(actionCreators.addFaculty(false))
        setFlag(true);
    }
    return (<>
        {

            <AddFaculty trigger={flag} setTrigger={setFlag} />
        }
        {

            <EditFacultyDetails trigger={flag1} setTrigger={setFlag1} />
        }
        <div className={`Admin-Container ${val ? "activate" : ""}`}>
            <div className='Add-Admin' onClick={handleFaculty}>
                <div className='plus-icon'>
                    <box-icon name='plus-circle' color="#007BAB" ></box-icon>
                </div>
                <div className='Add-Student-text'>
                    <h4>Add Faculty</h4>
                </div>
            </div>
            <div className='Admins-info-table'>
                <TableContainer component={Paper} style={{
                    width: val ? "81vw" : "91vw",
                    position: "relative",
                    top: "10%",
                    height: "80vh"

                }} >
                    <Table style={{ height: "max-content" }} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: "0px solid transparent", width: "20%", fontFamily: "'Inter', sans-serif" }} align='center'>Name</TableCell>
                                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Email</TableCell>
                                <TableCell style={{ border: "0px solid transparent", width: "20%", fontFamily: "'Inter', sans-serif" }} align='center'>Subject</TableCell>
                                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'></TableCell>
                                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'></TableCell>
                                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'></TableCell>
                                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                tableData.map((data) => (<>
                                    <TableRow>
                                        <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.fullname}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.email}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.subject}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer", fontFamily: "'Inter', sans-serif" }} onClick={() => handleEditDetails(data._id)}>
                                                <h6>Edit details</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer", fontFamily: "'Inter', sans-serif" }} onClick={() => handleMakeAdmin(data._id)}>
                                                <h6>Make Admin</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ border: "0px solid transparent" }} align='center'>
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer", fontFamily: "'Inter', sans-serif" }} onClick={() => handleView(data._id)} >
                                                <h6>View</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ border: "0px solid transparent" }} align='center' onClick={() => handleDelete(data._id)}>
                                            <div className='trash-icon' style={{ cursor: "pointer" }}>
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
        </div>
    </>);
};

export default ViewFaculty;
