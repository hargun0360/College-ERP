import React, { useState,useEffect } from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import illustrate from '../../../Assets/Images/resetpass.png'
import '../Login/Login.css'
import "../CreatePassword/CreatePass.css"
import "./ChangePass.css"


const ChangePass = () => {

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='Container'>
            <div className='illustration-box'>
                <Image imge={illustrate}/>
            </div>
            <div>
                <form className='Login-Box' onSubmit={handleSubmit(onSubmit)}>
                    <div className='Heading1'>
                        <h1 className='Login-Heading'>Reset Password</h1>
                    </div>
                    
                    <div className='type-box1'>
                        <div className='Label1'>
                            <label >
                                Old Password
                            </label>
                        </div>
                        <div className='input1'>
                            <i id="passlock" className="fa fa-lock icon"></i>
                            <i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle1(!toggle1) }}></i>
                            <input className='input-field' size={"44"} type={toggle1 ? "text" : "password"} placeholder='Password' name="oldpassword" {...register("oldpassword", { required: "**Password is required"})}></input>
                        </div>
                        <p className='alerts'>{errors.oldpassword?.message}</p>
                        <div className='Label2'>
                            <label >
                               New Password
                            </label>
                        </div>
                        <div className='input2'>
                            <i id="passlock" className="fa fa-lock icon"></i>
                            <i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle2(!toggle2) }}></i>
                            <input className='input-field' size={"44"} type={toggle2 ? "text" : "password"} placeholder='Password' name="newpassword" {...register("newpassword", { required: "**Password is required", minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" } })}></input>
                        </div>
                        <p className='alerts'>{errors.newpassword?.message}</p>
                        <div className='Button'>
                            <SubmitButton className="Login-Button5" Label="Continue" ></SubmitButton>
                        </div>
                    </div>
                    
                </form>

            </div>

        </div>
    )
}

export default ChangePass
