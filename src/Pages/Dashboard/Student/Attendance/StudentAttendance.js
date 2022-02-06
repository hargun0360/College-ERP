import React, { useState } from 'react';
import './Attendance.css'
import { useDispatch, useSelector } from 'react-redux'
import DistributedBar from './DistributedBar'
import MainRadialbar from '../Result/MainRadialbar'
import { useForm } from 'react-hook-form'
const StudentAttendance = () => {
  const { val } = useSelector((state) => state.toggle);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [data, setData] = useState([{id:"1",sem:"1"},{id:"2",sem:"2"},{id:"3",sem:"3"},{id:"4",sem:"4"},{id:"5",sem:"5"},{id:"6",sem:"6"},{id:"7",sem:"7"},{id:"8",sem:"8"},]);
  
  const handleChange = (data) => {

  if (data === "ST1") {
    setFlag1(true);
  } else if (data === "ST2") {
    setFlag2(true);
  } else if (data === "PUT") {
    setFlag3(true);
  }
console.log(flag1,flag2,flag3);
}

return (<>
  <div className={`StudentResult-Container ${val ? "activate" : ""}`} >
    {
      data.map((val,index) => (<>
        <div className='sem-heading'>
      <h4>Semester : <span>{val.id}</span></h4>
    </div>
    <div className='Marks-div'>
      <div className='marks-radialbar'>
        <div className='overall-marks'>
          <h4>Overall Percentage</h4>
        </div>
        <div className='radial-div-compo'>
          <MainRadialbar />
        </div>
      </div>
    </div>
    <form className='Exams-opt1'>
      <div className='st1-radio'>
        <label className='label-data1' htmlFor="field-Faculty">
          <input
            type="radio"
            name="opt"
            value="ST1"
            id="field-ST1"
            onChange={(e) => handleChange(e.target.value)}
          />
          ST1
        </label>

      </div>
      <div className='st2-radio'>
        <label className='label-data1' htmlFor="field-Student">
          <input
            type="radio"
            name="opt"
            value="ST2"
            id="field-ST2"
            onChange={(e) => handleChange(e.target.value)}
          />
          ST2
        </label>
      </div>
      <div className='PUT-radio'>
        <label className='label-data1' htmlFor="field-Both">
          <input
            type="radio"
            name="opt"
            value="PUT"
            id="field-PUT"
            onChange={(e) => handleChange(e.target.value)}
          />
          PUT
        </label>
      </div>
    </form>
    <div className='Column-bars'>
    {
      flag1 ?  <DistributedBar /> : null
    }
    {
      flag2 ?  <DistributedBar /> : null
    }
    {
      flag3 ?  <DistributedBar /> : null
    }
      
    </div>
    </>))
    }
  </div>
</>);
};

export default StudentAttendance;