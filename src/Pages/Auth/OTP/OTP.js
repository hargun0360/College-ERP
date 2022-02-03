import React, { useState,useEffect } from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import illustrate from '../../../Assets/Images/forgot.png'
import '../Login/Login.css'
import AuthService from '../../../ApiServices/AuthService'
import {useSelector} from 'react-redux'
import  {  useNavigate  } from 'react-router-dom'
import Toaster from '../../../Components/UI/Toaster/Toaster'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../../Components/UI/Spinner/Spinner'
import OtpTimer from 'otp-timer'
const OTP = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("userd") === null || localStorage.getItem("userd") === undefined){
            navigate('/');
        }
    },[]) 
    const [loading, setLoading] = useState(false)
    const mystate = useSelector((state)=>state.emailReducer.email)
    const onSubmit = (data,e) => {
        e.preventDefault();
        setLoading(true);
        let obj={
            email:mystate,
            otp:data.otp
        }
        AuthService.otp(obj)
        .then((res)=>{
            if(res.status===200){
                setLoading(false);
                toast.success("Verified Successfully");
                console.log(res);
                navigate("/createpass")
            }
            
        }).catch((error)=>{
            console.log(error);
            console.log(error.response);
            setLoading(false);
            if(error.response.status === 422){
                toast.warn("otp expired");
            }
            else if(error.response.status === 420){
                toast.warn("Wrong otp");
            }
            else if(error.response.status === 500){
                toast.error("Time out!");
            }
            else{
                navigate("/Page404");
            }
        })
        reset();
    }
    

    const handleClick = ()=>{
        setLoading(true);
        const object={
            email:mystate,
        }
        console.log(object);
        AuthService.resendotp(object)
        .then((res)=>{
            if(res.status===200){
                setLoading(false);
                toast.success("otp sent");
                console.log(res);
                
            }
            
        }).catch((error)=>{
            setLoading(false);
            console.log(error);
            if(error.response.status === 500){
                toast.error("Time out!");
            }
        })
    }

    return (
        <div className='Container'>
         {
            loading && <Spinner />
        }
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
                    <div className='Forgot-text'>
                    <OtpTimer minutes={0} seconds= {59} resend={handleClick} text="Resend OTP in" ButtonText="Resend OTP" textColor={"#1F5B7C"} buttonColor={"#1F5B7C"} background={"#ffffff"} />
                    </div>
                   
                </form>

            </div>
                    <Toaster />
        </div>
    )
}

export default OTP
