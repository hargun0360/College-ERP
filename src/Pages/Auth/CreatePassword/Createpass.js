import React, { useState } from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import illustrate from '../../../Assets/Images/resetpass.png'
import '../Login/Login.css'
import "./CreatePass.css"
import "../ChangePassword/ChangePass.css"
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import  {  useNavigate  } from 'react-router-dom'
import {useSelector} from 'react-redux'
import AuthService from '../../../ApiServices/AuthService'
import Toaster from '../../../Components/UI/Toaster/Toaster'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../../Components/UI/Spinner/Spinner'
const CreatePass = () => {
    const navigate = useNavigate();
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [loading, setLoading] = useState(false)
    const mystate1 = localStorage.getItem("userd");
    const mystate2 = useSelector((state)=>state.emailReducer.email)
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password length should be at least 8 characters")
          .max(14, "Password cannot exceed more than 14 characters"),
        cpassword: Yup.string()
          .required("Confirm Password is required")
          .oneOf([Yup.ref("password")], "Passwords do not match")
      });
   
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
      });
    const onSubmit = (data,e) => {
        e.preventDefault();
        setLoading(true);
        console.log(data);
        let obj={
            email:mystate2,
            password:data.password,
            cpassword:data.cpassword
        }
        console.log(obj);
        console.log(mystate1);
        console.log(mystate2);
        AuthService.resetpass(mystate1,obj)
        .then((res)=>{
            if(res.status===200){
                setLoading(false);
                toast.success("saved successfully");
                console.log(res);
                navigate("/Login");
            }
            
        }).catch((error)=>{
            console.log(error);
            console.log(error.response);
            setLoading(false);
            if(error.response.status === 500){
                toast.error("Time out!");
            }
            else if(error.response.status === 422){
                toast.warn("pasword do not match");
            }
            else{
                navigate("/Page404");
            }
        })
            reset();
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
                            {
                                toggle1?<i id="showpass" className="fa fa-eye-slash icon" onClick={() => { setToggle1(!toggle1) }}></i>:<i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle1(!toggle1) }}></i>
                            }
                            <input className='input-field' size={"44"} type={toggle1 ? "text" : "password"} placeholder='Password' name="password" {...register("password")}></input>
                        </div>
                        <p className='alerts'>{errors.password?.message}</p>
                        <div className='Label2'>
                            <label >
                               Confirm Password
                            </label>
                        </div>
                        <div className='input2'>
                            <i id="passlock" className="fa fa-lock icon"></i>
                            {
                                toggle2?<i id="showpass" className="fa fa-eye-slash icon" onClick={() => { setToggle2(!toggle2) }}></i>:<i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle2(!toggle2) }}></i>
                            }
                            <input className='input-field' size={"44"} type={toggle2 ? "text" : "password"} placeholder='Password' name="cpassword" {...register("cpassword")}></input>
                        </div>
                       <p className='alerts'>{errors.cpassword?.message}</p>
                        <div className='Button'>
                            <SubmitButton className="Login-Button4" Label="Proceed"  ></SubmitButton>
                        </div>
                    </div>
                    
                </form>

            </div>
                <Toaster />
        </div>
    )
}

export default CreatePass
