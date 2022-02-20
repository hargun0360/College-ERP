import React, { useEffect, useState } from 'react';
import './Attendance.css'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
const MarkAttendance = () => {
  const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
  const { val } = useSelector((state) => state.toggle);
  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(false);
  const [batch, setBatch] = useState(null);
  const [year, setYear] = useState(null);
  const [batches, setBatches] = useState([]);
  const [tableData, setTableData] = useState([])
  const handleYearDropdown = (e) => {
    setYear(e.target.value);
    console.log(e.target.value);
    setFlag(false);
  }
  const handleBatchDropdown = (e) => {
    e.preventDefault();
    setBatch(e.target.value);
    setFlag1(true);
  }
  const handleApply = (e) => {
    // e.preventDefault();
    // if (year && batch) {


    //     AuthService.getStudents(batch, year)
    //         .then((res) => {
    //             console.log(res);
    //             setTableData(res.data.students);
    //         }).catch((e) => {
    //             console.log(e);
    //         })
    // } else {
    //     // show error
    //     toast.warn("Please Select Year and Batch")
    // }
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
          top: "5%",
          height: "80vh"

        }} >
          <Table style={{ height: "max-content" }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ border: "0px solid transparent", width: "20%", fontFamily: "'Inter', sans-serif" }} align='center'>Roll Number</TableCell>
                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Name</TableCell>
                <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>Attendance </TableCell>
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
                      <div className='Att-box' style={{ width: "50px", height: "50px", backgroundColor: "lightgreen", border: "1px solid black", color: "white" }} >
                        p
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

export default MarkAttendance;