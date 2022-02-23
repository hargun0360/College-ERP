import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'boxicons'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import './Admins.css'
import AddAdmin from './AddAdmin'
import AuthService from '../../../../ApiServices/AuthService';
import * as actionCreators from '../../../../Service/Action/FacultyAction'
const AdminsData = () => {
    const { val } = useSelector((state) => state.toggle);
    const [flag, setFlag] = useState(false);
    const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();
    const { del } = useSelector((state) => state.faculty)
    const adminId = localStorage.getItem("userid");
    const handleDelete = (id) => {
        if (adminId === id) {
            alert("You can't delete Yourself");
        }
        else {
            dispatch(actionCreators.deleteAdmin(false));
            console.log(id);
            AuthService.DelAdmins(id)
                .then((res) => {
                    console.log(res);
                    if (res) {
                        dispatch(actionCreators.deleteAdmin(true));
                    }
                }).catch((e) => {
                    console.log(e);
                })
        }

    }
    useEffect(() => {
        loadAdmins();
    }, [del]);
    useEffect(() => {
        loadAdmins();
    }, []);

    const loadAdmins = async () => {
        await AuthService.getAdmins()
            .then((res) => {
                console.log(res);
                setTableData(res.data)
            }).catch((e) => {
                console.log(e);
            })

    }

    return (<>
        <div className={`Admin-Container ${val ? "activate" : ""}`}>
            <div className='Admins-info-table'>
                <TableContainer component={Paper} style={{
                    width: val ? "81vw" : "91vw",
                    position: "relative",
                    top: "5%",
                    height: "90vh"

                }} >
                    <Table style={{ height: "max-content" }} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: "0px solid transparent", width: "20%", fontFamily: "'Inter', sans-serif" }} align='center'>Name</TableCell>
                                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Email</TableCell>
                                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Subject</TableCell>
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

export default AdminsData;
