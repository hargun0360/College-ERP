import React, { useState, useEffect } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { set, useForm } from 'react-hook-form'
import * as actionCreators from "../../../../Service/Action/action";
import { useDispatch, useSelector } from 'react-redux'
const EditDetails = (props) => {
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

    return (props.trigger) ?  (
        <div className='Modal-box1'>
            <div className='EditDetails-Form'>
                <div className='EditDetails-Heading' style={{marginBottom:"5%"}}>
                    <h2>Edit Details</h2>
                </div>
                <div>
                    <form className='EditDetails-Form-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input' style={{marginBottom:"3%"}}>
                            <div className='Label-form'>
                                <label htmlFor="Full-Name">
                                     Name
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"34"} type="text" name="Name" {...register("Name", { required: "**Name is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.Name?.message}</p>
                        </div>
                        <div className='combine-input' style={{margin:"5% 0%"}}>
                            <div className='Label-form'>
                                <label htmlFor="Email">
                                    Email
                                </label>
                            </div>
                            <div className='Input-detail1'>
                                <i id="emailicon1" className="fa fa-envelope icon"></i>
                                <input className='input-field-form1' size={"32"} type="email" placeholder='example@akgec.ac.in' name="email" {...register("email", { required: "**Email is required", pattern: { value: /^[a-zA-Z0-9_\-]{4,}[@][a][k][g][e][c][\.][a][c][\.][i][n]$/i, message: "**This is not a valid email" } })}></input>
                            </div>
                            <p className='alerts'>{errors.email?.message}</p>
                        </div>
                        <div className='EditDetail-btn'>
                            <SubmitButton className="EditDetail-button" Label="Update" ></SubmitButton>
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

export default EditDetails
