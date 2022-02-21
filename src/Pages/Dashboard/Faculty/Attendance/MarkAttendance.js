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
  const [tableData, setTableData] = useState([{ id: "1", name: "hargun", roll: "2000270130065" },
  { id: "2", name: "hargun", roll: "2000270130066" },
  { id: "3", name: "mohit", roll: "2000270130067" },
  { id: "4", name: "bhavya", roll: "2000270130068" },
  { id: "5", name: "manish", roll: "2000270130069" },
  { id: "6", name: "hargun", roll: "2000270130070" },
  { id: "7", name: "hargun", roll: "2000270130071" },
  { id: "8", name: "hargun", roll: "2000270130072" },
  { id: "9", name: "hargun", roll: "2000270130073" },
  { id: "10", name: "hargun", roll: "2000270130074" },
  { id: "11", name: "hargun", roll: "2000270130075" },]);
  const [arr, setArr] = useState(tableData.map(data => (
    {
      id: data.id,
      att: false,
      roll: data.roll,
    }
  )));
  let a;
  const handleClick = (id) => {
    a = arr;
    a[id].att = !a[id].att;
    setArr(a);
  }

  useEffect(() => {
    console.log(arr);
  }, [JSON.stringify(arr)])

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
          top: "-3%",
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
                        arr[id].att ? <div className='Att-box' style={{ width: "50px", height: "50px", backgroundColor: "lightgreen", border: "0.5px solid black", color: "black", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", borderRadius: "50%", cursor: "pointer" }} onClick={() => handleClick(id)} >
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
    </div>
  </>);
};

export default MarkAttendance;