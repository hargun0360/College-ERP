import React, { useState } from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import illustrate from '../../../Assets/Imagesused/resetpass.png'
import '../Login/Login.css'
import "./CreatePass.css"
import "../ChangePassword/ChangePass.css"

const CreatePass = () => {

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
                        <h1 className='Login-Heading'>Create Password</h1>
                    </div>
                    
                    <div className='type-box1'>
                        <div className='Label1'>
                            <label >
                             Password
                            </label>
                        </div>
                        <div className='input1'>
                            <i id="passlock" className="fa fa-lock icon"></i>
                            <i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle1(!toggle1) }}></i>
                            <input className='input-field' size={"44"} type={toggle1 ? "text" : "password"} placeholder='Password' name="password" {...register("password", { required: "**Password is required", minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" }})}></input>
                        </div>
                        <p className='alerts'>{errors.password?.message}</p>
                        <div className='Label2'>
                            <label >
                               Confirm Password
                            </label>
                        </div>
                        <div className='input2'>
                            <i id="passlock" className="fa fa-lock icon"></i>
                            <i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle2(!toggle2) }}></i>
                            <input className='input-field' size={"44"} type={toggle2 ? "text" : "password"} placeholder='Password' name="cpassword" {...register("cpassword", { required: "**Password is required" })}></input>
                        </div>
                        <p className='alerts'>{errors.newpassword?.message}</p>
                        <div className='Button'>
                            <SubmitButton className="Login-Button4" Label="Proceed" ></SubmitButton>
                        </div>
                    </div>
                    
                </form>

            </div>

        </div>
    )
}

export default CreatePass
