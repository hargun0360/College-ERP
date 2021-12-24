import React, { useState } from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import illustrate from '../../../Assets/Imagesused/forgot.png'
import '../Login/Login.css'

const OTP = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const handleClick = (data)=>{
        // trigger the api to resend the otp.
        console.log(data);
    }

    return (
        <div className='Container'>
            <div className='illustration-box'>
                <Image imge={illustrate}/>
            </div>
            <div>
                <form className='Login-Box' onSubmit={handleSubmit(onSubmit)}>
                    <div className='Heading1'>
                        <h1 className='Login-Heading'>OTP Verification</h1>
                    </div>
                    <div className='para3'>
                        <p>Enter One Time Password(OTP) sent to your email.</p>
                    </div>
                    <div className='type-box'>
                        <div className='input1' style={{paddingBottom:"14px"}}>
                            <input className='input-field' size={"44"} type="text" placeholder='Confirmation code' name="otp" {...register("otp", { required: "**OTP is required" })}></input>
                        </div>
                        <p className='alerts'>{errors.otp?.message}</p>
                        <div className='Button'>
                            <SubmitButton className="Login-Button" Label="Login" ></SubmitButton>
                        </div>
                    </div>
                    <div className='Forgot-text' onClick={handleClick}>
                        <p className='Forgotpassword-text'>Resend OTP</p>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default OTP
