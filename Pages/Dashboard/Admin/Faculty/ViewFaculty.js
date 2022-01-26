import React,{useState} from 'react';
import { useSelector } from 'react-redux'
import 'boxicons'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import '../Admins/Admins.css'

const ViewFaculty = () => {
    const { val } = useSelector((state) => state.toggle);
    const [tableData, setTableData] = useState([{id:"1",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"2",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"3",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"4",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"5",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"6",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"7",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"8",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"9",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"10",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"11",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"12",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"},{id:"13",name:"Mohit",email:"Mohit2013021@akgec.ac.in",sub:"Node JS"}])
    const handleView = (id) => {
        console.log(id)
    }
    const handleDelete = (id) => {
        console.log(id);
    }
    const handleEditDetails =  (id) =>{
        console.log(id);
    }
  return (<>
      <div className={`Admin-Container ${val ? "activate" : ""}`}>
      <div className='Add-Admin'>
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
                    height:"80vh"

                }} >
                    <Table style={{height: "max-content"}} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: "0px solid transparent", width: "20%",fontFamily:"'Inter', sans-serif"  }} align='center'>Name</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Email</TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>Subject</TableCell>
                                <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'></TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'></TableCell>
                                <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                tableData.map((data) => (<>
                                    <TableRow>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.name}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent",fontFamily:"'Inter', sans-serif"  }} align='center'>{data.email}</TableCell>
                                        <TableCell style={{ border: "0px solid transparent" ,fontFamily:"'Inter', sans-serif" }} align='center'>{data.sub}</TableCell>
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
      </div>
  </>);
};

export default ViewFaculty;
