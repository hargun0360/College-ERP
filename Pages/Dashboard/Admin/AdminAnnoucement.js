import React, { useState } from 'react'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import './AdminDetailForm.css'
import DateTimeBox from '../Annoucement/DateTimeBox'
import 'react-datepicker/dist/react-datepicker.css'
const AdminAnnoucementForm = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        reset();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }
    return (props.trigger) ? (
        <div className='Modal-box'>
            <div className='Admin-Form'>
                <div className='Admin-Form-Heading'>
                    <h2>Announcement Details</h2>
                </div>
                <div>
                    <form className='Admin-Input' onSubmit={handleSubmit(onSubmit)}>
                        <DateTimeBox />
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Announcement">
                                    Announcement
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <textarea className='input-field-form' cols={40} rows={5} type="text" name="Announcement" {...register("Announcement", { required: "**Announcement field is required" })}></textarea>
                            </div>
                            <p className='alerts'>{errors.Announcement?.message}</p>
                        </div>
                        <div className='annoucement-opt'>
                            <div className='faculty-radio'>
                                <label className='label-data' htmlFor="field-Faculty">
                                    <input
                                        {...register("aopt", { required: "**This field is required" })}
                                        type="radio"
                                        name="aopt"
                                        value="Faculty"
                                        id="field-Faculty"
                                    />
                                    Faculty
                                </label>

                            </div>
                            <div className='student-radio'>
                            <label className='label-data' htmlFor="field-Student">
                                    <input
                                        {...register("aopt", { required: "**This field is required" })}
                                        type="radio"
                                        name="aopt"
                                        value="Student"
                                        id="field-Student"
                                    />
                                    Student
                                </label>
                            </div>
                            <div className='both-radio'>
                            <label className='label-data' htmlFor="field-Both">
                                    <input
                                        {...register("aopt", { required: "**This field is required" })}
                                        type="radio"
                                        name="aopt"
                                        value="Both"
                                        id="field-Both"
                                    />
                                    Both
                                </label>
                            </div>
                        </div>
                        <p className='alerts'>{errors.aopt?.message}</p>
                        <div className='Button-update'>
                            <SubmitButton className="Admin-Update" Label="Post" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross1'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    ) : null
}

export default AdminAnnoucementForm
