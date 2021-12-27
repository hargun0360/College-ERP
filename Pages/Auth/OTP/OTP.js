import React, { useState } from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import illustrate from '../../../Assets/Imagesused/forgot.png'
import '../Login/Login.css'
import AuthService from '../../../ApiServices/AuthService'
import {useSelector} from 'react-redux'
import  {  useNavigate  } from 'react-router-dom'
const OTP = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const navigate = useNavigate();
    const mystate = useSelector((state)=>state.emailReducer.email)
    const onSubmit = (data,e) => {
        e.preventDefault();
        let obj={
            email:mystate,
            otp:data.otp
        }
        AuthService.otp(obj)
        .then((res)=>{
            if(res.status===200){
                alert("Verified Successfully");
                console.log(res);
                navigate("/createpass")
            }
            
        }).catch((error)=>{
            console.log(error);
            console.log(error.response);
            if(error.response.status === 422){
                alert("otp expired");
            }
            if(error.response.status === 420){
                alert("Wrong otp");
            }
            if(error.response.status === 500){
                alert("Time out!");
            }
        })
        reset();
    }

    const handleClick = (e)=>{
        e.preventDefault();
        const object={
            email:mystate,
        }
        console.log(object);
        AuthService.resendotp(object)
        .then((res)=>{
            if(res.status===200){
                alert("Resend otp");
                console.log(res);
                
            }
            
        }).catch((error)=>{
            console.log(error);
            if(error.response.status === 500){
                alert("Time out!");
            }
        })

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
