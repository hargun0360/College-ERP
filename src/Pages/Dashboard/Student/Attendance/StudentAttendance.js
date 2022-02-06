import React from 'react';
import './Attendance.css'
import { useDispatch, useSelector } from 'react-redux'
import DistributedBar from './DistributedBar'
import MainRadialbar from '../Result/MainRadialbar'
import { useForm } from 'react-hook-form'
const StudentAttendance = () => {
  const { val } = useSelector((state) => state.toggle);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onTouched"
  });
  const onSubmit = (data, e) => {
    e.preventDefault();

    reset();
  }
  return (<>
    <div className={`StudentResult-Container ${val ? "activate" : ""}`} >
    <div className='sem-heading'>
      <h4>Semester : 1</h4>
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
      <div className='Exams-opt1'>
          <div className='st1-radio'>
            <label className='label-data1' htmlFor="field-Faculty">
              <input
                {...register("opt", { required: "**This field is required" })}
                type="radio"
                name="opt"
                value="ST1"
                id="field-ST1"
              />
              ST1
            </label>

          </div>
          <div className='st2-radio'>
            <label className='label-data1' htmlFor="field-Student">
              <input
                {...register("opt", { required: "**This field is required" })}
                type="radio"
                name="opt"
                value="ST2"
                id="field-ST2"
              />
              ST2
            </label>
          </div>
          <div className='PUT-radio'>
            <label className='label-data1' htmlFor="field-Both">
              <input
                {...register("opt", { required: "**This field is required" })}
                type="radio"
                name="opt"
                value="PUT"
                id="field-PUT"
              />
              PUT
            </label>
          </div>
        </div>
      <div className='Column-bars'>
        <DistributedBar />
      </div>
    </div>
  </>);
};

export default StudentAttendance;