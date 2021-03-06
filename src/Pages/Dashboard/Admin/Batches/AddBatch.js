import React, { useState, useEffect } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { set, useForm } from 'react-hook-form'
import AuthService from '../../../../ApiServices/AuthService';
import Toaster from '../../../../Components/UI/Toaster/Toaster'
import {toast} from 'react-toastify'
const AddBatch = (props) => {
    const [year, setYear] = useState(null);
    const [state, setState] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
    });
    const onSubmit = (data, e) => {
        if(year===null){
            setState(true);
        }else{
            const obj = {
                batch:data.batch,
                year:year,
                sem:data.Semester,
            }
            AuthService.AddBatch(obj)
            .then((res)=>{
                console.log(res);
                if(res){
                    toast.success("Batch Created Successfully");
                }
                
            }).catch((e)=>{
                console.log(e);
                toast.error("Network error");
            })
        }
        e.preventDefault();
        reset();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }
    const handleYearDropdown = (e) => {
        setYear(e.target.value);
    }
    const years = [{ id: "1", yr: "First" }, { id: "2", yr: "Second" }, { id: "3", yr: "Third" }, { id: "4", yr: "Fourth" }];

    return (props.trigger) ? (
        <div className='Modal-box'>
            <div className='Batch-Form'>
                <div className='Batch-Form-Heading' style={{marginBottom:"5%"}}>
                    <h2>Batch Details</h2>
                </div>
                <div>
                    <form className='Batch-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input' style={{marginBottom:"3%"}}>
                            <div className='Label-form'>
                                <label htmlFor="Batch Name">
                                    Batch Name
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"34"} type="text" name="batch" {...register("batch", { required: "**batch is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.batch?.message}</p>
                        </div>
                        <div className='Year-Dropdown' style={{margin:"3% 0%"}}>
                            <select id="year-drop-batch" onChange={handleYearDropdown}>
                                <option selected="selected" hidden>Select Year</option>
                                {
                                    years.map((y) => (
                                        <option key={y.id} name={y.id} value={y.id}>{y.yr}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {state ? <p className='alerts'>**Year is required</p> : null}
                        <div className='combine-input' style={{margin:"5% 0%"}}>
                            <div className='Label-form'>
                                <label htmlFor="Semester">
                                    Semester
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"34"} type="text" name="Semester" {...register("Semester", { required: "**Semester is required", maxLength: { value: 1, message: "**Semester cannot exceed more than 1 number" }, pattern: { value: /^[1-8]{1}$/i, message: "**This is not a valid semester" } })}></input>
                            </div>
                            <p className='alerts'>{errors.Semester?.message}</p>
                        </div>
                        <div className='Add-Batch-btn'>
                            <SubmitButton className="Add-batch-button" Label="Add Batch" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross-icon'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
            <Toaster />
        </div>
    ) : null;
}

export default AddBatch
