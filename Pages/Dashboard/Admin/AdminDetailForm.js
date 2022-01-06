import React from 'react'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import './AdminDetailForm.css'
const AdminDetailForm = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        reset();
    }
    const handleClick = (e)=>{
        e.preventDefault();
        props.setTrigger(false);
}
    return (props.trigger) ? (
        <div className='Modal-box'>
            <div className='Admin-Form'>
                <div className='Admin-Form-Heading'>
                    <h2>Fill Personal Details</h2>
                </div>
                <div>
                    <form className='Admin-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Full-Name">
                                    Full Name
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"40"} type="text" name="fullname" {...register("fullname", { required: "**Name is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.fullname?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Email">
                                    Email
                                </label>
                            </div>
                            <div className='Input-detail1'>
                                <i id="emailicon1" className="fa fa-envelope icon"></i>
                                <input className='input-field-form1' size={"38"} type="email" placeholder='example@akgec.ac.in' name="email" {...register("email", { required: "**Email is required", pattern: { value: /^[a-zA-Z0-9_\-]{4,}[@][a][k][g][e][c][\.][a][c][\.][i][n]$/i, message: "**This is not a valid email" } })}></input>
                            </div>
                            <p className='alerts'>{errors.email?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Mobile">
                                    Mobile Number
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"40"} type="text" name="mobilenumber" {...register("mobilenumber", { required: "**Mobile Number is required", pattern: { value: /^[6789][0-9]{9}$/i, message: "**This is not a valid mobile number" } })}></input>
                            </div>
                            <p className='alerts'>{errors.mobilenumber?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Qualification">
                                    Qualification
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"40"} type="text" name="qualification" {...register("qualification", { required: "**Qualification is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.qualification?.message}</p>
                        </div>
                        <div className='Button-update'>
                            <SubmitButton className="Admin-Details-Update" Label="Update" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross1'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    ):null;
}

export default AdminDetailForm
