import React, { useEffect, useState } from 'react';
import './Attendance.css'
import { Paper, TableContainer, TableBody, Table, TableHead, TableCell, TableRow } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
import AuthService from '../../../../ApiServices/AuthService'
const MarkAttendance = () => {
  const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
  const { val } = useSelector((state) => state.toggle);
  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(false);
  const [batch, setBatch] = useState(null);
  const [year, setYear] = useState(null);
  const [batches, setBatches] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [arr, setArr] = useState([]);

  useEffect(() => {
    loadBatch();

  }, [year]);

  const loadBatch = async () => {
    try {
      const res = await AuthService.getBatch(year);
      setBatches(res.data);
    } catch (error) {
      console.log(error);
    }

  }
  let a;
  const handleClick = (id) => {
    a = [...arr];
    a[id].att = !a[id].att;
    setArr(a);
  }
  useEffect(() => {
    if (arr.length > 0) {
      console.log(arr);
    }
  }, [arr])

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
    e.preventDefault();
    if (year && batch) {


      AuthService.getStudents(batch, year)
        .then((res) => {
          console.log(res);
          setTableData(res.data.students);
          setArr(res.data.students.map(data => (
            {
              id: data._id,
              att: true,
            }
          )))
        }).catch((e) => {
          console.log(e);
        })
    } else {
      // show error
    }
  }
  const handleAtt = () => {
    // post api call
  }
  console.log(arr);

  return (<>
    <div className={`Admin-Container ${val ? "activate" : ""}`} >
      <div className='Batch-Details'>
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
          top: "2%",
          height: "70vh"

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
                tableData.map((data, id) => (<>
                  <TableRow>
                    <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.roll}</TableCell>
                    <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif" }} align='center'>{data.name}</TableCell>
                    <TableCell style={{ border: "0px solid transparent", fontFamily: "'Inter', sans-serif", display: "flex", justifyContent: "center" }} align='center'>
                      {

                        arr.length > 0 && arr[id].att ? <div className='Att-box' style={{ width: "50px", height: "50px", backgroundColor: "lightgreen", border: "0.5px solid black", color: "black", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", borderRadius: "50%", cursor: "pointer" }} onClick={() => handleClick(id)} >
                          P
                        </div> :
                          <div className='Att-box' style={{ width: "50px", height: "50px", backgroundColor: "#f15151", border: "0.5px solid black", color: "black", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", borderRadius: "50%", cursor: "pointer" }} onClick={() => handleClick(id)}  >
                            A
                          </div>}
                    </TableCell>
                  </TableRow>
                </>))
              }
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      <div className='Upload-Btn-att' onClick={() => handleAtt}>
        <h5>Upload</h5>
      </div>
    </div>
  </>);
};

export default MarkAttendance;