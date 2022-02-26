import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './TimeTable.css'
const Timetables = () => {
  const [year, setYear] = useState(null);
  const [batch, setBatch] = useState(null);
  const [flag1, setFlag1] = useState(false);
  const [flag, setFlag] = useState(true);
  const [batches, setBatches] = useState([]);
  const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
  const { val } = useSelector((state) => state.toggle);
  const handleYearDropdown = (e) => {
    setYear(e.target.value);
    console.log(e.target.value);
    setFlag(false);
}
const handleBatchDropdown = (e) => {
  setBatch(e.target.value);
}
const handleApply = (e) => {
  e.preventDefault();
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
  <div className={`Admin-Container ${val ? "activate" : ""}`}>
    <div className='Timetable-BatchDetail'>
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
    </div>
    <div className='row1'>
        
    </div>
    <div className='row2'>
      
    </div>
    <div className='row3'>
      
    </div>
    <div className='row4'>
      
    </div>
    <div className='row5'>
      
    </div>
    <div className='row6 '>
      
    </div>
  </div>
  </>);
};

export default Timetables;
