import React, { useState, useEffect } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { set, useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";
const AddHoliday = (props) => {
    const [startDate, setStartDate] = useState(new Date());
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

    return (props.trigger) ?   (
        <div className='Modal-box1'>
            <div className='EditDetails-Form'>
                <div className='EditDetails-Heading' style={{marginBottom:"5%"}}>
                    <h2>Add Holiday</h2>
                </div>
                <div>
                    <form className='EditDetails-Form-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input' style={{marginBottom:"3%"}}>
                            <div className='Label-form'>
                                <label htmlFor="Full-Name">
                                     Title
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"30"} type="text" name="title" {...register("title", { required: "**Title is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.title?.message}</p>
                        </div>
                        <div className='combine-input' style={{margin:"5% 0%"}}>
                            <div className='Label-form'>
                                <label htmlFor="Date">
                                    Date
                                </label>
                            </div>
                            <DatePicker selected={startDate} dateFormat={'dd-mm-yyyy'} onChange={(date) => setStartDate(date)}  />
                        </div>
                        <div className='EditDetail-btn'>
                            <SubmitButton className="EditDetail-button" Label="Add" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross-icon'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    ) : null ;
}

export default AddHoliday
