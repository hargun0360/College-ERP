import React, { useState, useEffect } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { set, useForm } from 'react-hook-form'
import './Batches.css'
const AddStudent = (props) => {
    const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];
    const semester = [{ id: "1", sem: "1" }, { id: "2", sem: "2" }, { id: "3", sem: "3" }, { id: "4", sem: "4" }, { id: "5", sem: "5" }, { id: "6", sem: "6" }, { id: "7", sem: "7" }, { id: "8", sem: "8" }];
    const [year , setYear] = useState(null);
    const [sem , setSem] = useState(null);
    const [csvfile,setCsvFile] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
    });
    const onSubmit = (data, e) => {
        e.preventDefault();

    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }
    const handleSemesterDropdown = (e) => {
        setSem(e.target.value);
    }
    const handleYearDropdown = (e) => {
        setYear(e.target.value);
    }

    return (props.trigger) ? (
        <div className='Modal-box'>
            <div className='AddStudent-Form'>
                <div className='EditDetails-Heading' style={{ marginBottom: "5%" }}>
                    <h2>Add Student</h2>
                </div>
                <div>
                    <form className='EditDetails-Form-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input' style={{ marginBottom: "3%" }}>
                            <div className='Label-form'>
                                <label htmlFor="Batch Name">
                                    Batch Name
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"34"} type="text" name="batch" {...register("batch", { required: "**Batch Name is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.batch?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Year-Dropdown'>
                                <select id="Year-drop" onChange={handleYearDropdown}>
                                    <option selected="selected" hidden>Select Year</option>
                                    {
                                        years.map((y) => (
                                            <option key={y.id} name={y.id} value={y.id}>{y.yr}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='combine-input'>
                            <div className='Year-Dropdown'>
                                <select id="sem-drop" onChange={handleSemesterDropdown}>
                                    <option selected="selected" hidden>Select Semester</option>
                                    {
                                        semester.map((s) => (
                                            <option key={s.id} name={s.id} value={s.id}>{s.sem}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='combine-input' style={{ marginBottom: "3%" }}>
                            <div className='Label-form'>
                                <label htmlFor="Upload File">
                                    Upload File
                                </label>
                            </div>
                            <div className='Input-Details' style={{marginBottom: "4%"}}>
                                <input 
                                 type="file" 
                                 accept='.csv'
                                 name="csv" 
                                 onChange={(e) => { setCsvFile(e.target.files[0]) }} ></input>
                            </div>
                        </div>
                        <div className='EditDetail-btn'>
                            <SubmitButton className="EditDetail-button" Label="Add Student" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross-icon'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    ) : null;
}

export default AddStudent
