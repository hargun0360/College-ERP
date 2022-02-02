import React from 'react';
import './Attendance.css'
import { useDispatch, useSelector } from 'react-redux'
const StudentAttendance = () => {
    const { val } = useSelector((state) => state.toggle);
  return (<>
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} > 
            <div></div>
      </div>
  </>);
};

export default StudentAttendance;