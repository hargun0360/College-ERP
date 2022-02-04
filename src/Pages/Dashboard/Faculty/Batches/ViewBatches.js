import React, { useEffect, useState } from 'react';
import './Batches.css'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
import AuthService from '../../../../ApiServices/AuthService';
import Toaster from '../../../../Components/UI/Toaster/Toaster'
import { toast } from 'react-toastify';
const ViewBatches = () => {
    const { val } = useSelector((state) => state.toggle);
    const [year, setYear] = useState(null);
    const [flag, setFlag] = useState(true);
    const [batch, setBatch] = useState(null);
    const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
    const [batches , setBatches] = useState([]);
    const [tableData, setTableData] = useState([{ id: "1", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "2", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "3", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "4", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "5", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "6", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "7", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "8", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "9", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" },
    { id: "10", roll:"2000270130065" , name:"hargun" , email : "hargun2013021@akgec.ac.in" }]);
    
    const handleYearDropdown = (e) => {
      setYear(e.target.value);
      console.log(e.target.value);
      setFlag(false);
  }
  const handleBatchDropdown = (e) => {
    setBatch(e.target.value);
}
const handleView = (id) => {
  localStorage.setItem("stuid",id);
  // navigate("/Dashboard/stuProfile");
}
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
      toast.warn("Please Select Year and Batch")
  }
}
const handleDelete = (id) => {
  // setTrigger(true);
  // console.log(trigger);
  // AuthService.DelStudent(id)
  //     .then((res)=>{
  //         console.log(res);
  //         if(res){
  //             toast.success("Student Deleted Successfully")
  //         }
  //         setTrigger(false);
  //         console.log(trigger);
  //     }).catch((e)=>{
  //         console.log(e);
  //         toast.error("Error!")
  //     })
}
  return (<>
      <div className={`Admin-Container ${val ? "activate" : ""}`} > 
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
            </div>
            <div className='Student-Info-Table'>

                <TableContainer component={Paper} style={{
                    width: val ? "81vw" : "91vw",
                    position: "relative",
                    top: "6%",
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
                                            <div className='Edit-details' style={{ color: "#007BAB", cursor: "pointer",fontFamily:"'Inter', sans-serif"  }} onClick={()=>handleView(data._id)}>
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
            <Toaster />
      </div>
  </>);
};

export default ViewBatches;