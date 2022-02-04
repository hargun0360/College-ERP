import React, { useState } from 'react';
import './Marks.css'
import '../../Admin/Batches/Batches.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
const GiveMarks = () => {
  const { val } = useSelector((state) => state.toggle);
  const [batch, setBatch] = useState(null);
  const [batches, setBatches] = useState([]);
  const [flag, setFlag] = useState(true);
  const [sub, setSub] = useState(null);
  const [year, setYear] = useState(null);
  const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
  const [subject, setSubject] = useState([{ id: "1", sub: "maths" },
  { id: "2", sub: "maths" },
  { id: "3", sub: "maths" },
  { id: "4", sub: "maths" },])
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onTouched"
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    if(batch==null || year==null || sub==null){
      
    }
    // const obj={
    //     date: today,
    //     time: formatAMPM(new Date),
    //     announcement:data.Announcement,
    //     annfor:data.aopt,
    // }
    // console.log(obj);

    reset();
  }
  const handleSubDropdown = (e) => {
    setSub(e.target.value);
    console.log(e.target.value);
    setFlag(false);
  }
  const handleYearDropdown = (e) => {
    setYear(e.target.value);
    console.log(e.target.value);
    setFlag(false);
  }
  const handleBatchDropdown = (e) => {
    setBatch(e.target.value);
  }
  return (<>
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className={`Annoucement-Container ${val ? "activate" : ""}`} >
        <div className='Batches-Detail'>
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
          <div className='Subject-Dropdown'>
            <select id="sub-drop" onChange={handleSubDropdown}>
              <option selected="selected" hidden>Select Subject</option>
              {
                subject.map((y) => (
                  <option key={y.id} name={y.id} value={y.sub}>{y.sub}</option>
                ))
              }
            </select>
          </div>
          <div className='Batch-Dropdown'>
            <select id="batch-drop" onChange={handleBatchDropdown}>
              <option selected="selected" hidden>Select Batch</option>
              {
                batches.map((b) => (
                  <option key={b._id} name={b._id} value={b._id}>{b._id}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='Exams-opt'>
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
        <p style={{position:"relative",top:"12%",}} className='alerts'>{errors.opt?.message}</p>
        <div className='exbox'>
          <div className='combine-input'>
            <div className='Label-form'>
              <label htmlFor="Maximum-Marks">
                Maximum Marks
              </label>
            </div>
            <div className='Input-detail'>
              <input className='input-field-form' size={"40"} type="text" name="max" {...register("max", { required: "**Maximum Marks is required", pattern: { value: /^[1-9][0-9]{1,}$/i, message: "**This is not a valid marks" }  })}></input>
            </div>
            <p className='alerts'>{errors.max?.message}</p>
          </div>
        </div>
        <div className='exbox1'>
          <button className='Apply-Button' type='submit' >
            <div className='Apply-text'>
              <h4>Apply</h4>
            </div>
          </button>
        </div>
      </div>
    </form>
  </>);
};

export default GiveMarks;