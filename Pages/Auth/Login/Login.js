import React, { useState } from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import illustrate from '../../../Assets/Imagesused/login.png'
import AuthService from '../../../ApiServices/AuthService'
import './Login.css'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import * as actionCreators from "../../../Service/Action/action";
import  {  useNavigate  } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mystate = useSelector((state)=>state.emailReducer.user)
    const [toggle, setToggle] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    console.log(mystate);
    const onSubmit = (data,e) => {
        e.preventDefault();
        console.log(e);
        let loginas=mystate;
        console.log(data);
        AuthService.login(loginas,data)
        .then((res)=>{
            if(res.status===201){
                console.log(res);
            localStorage.setItem("user",res.data.accessToken);
            localStorage.setItem("ref_token",res.data.refreshToken);
            dispatch(actionCreators.userEmail(res.data.email));
            navigate("/");
            }
            
        }).catch((error)=>{
            console.log(error);
            console.log(error.response);
            if(error.response.status === 404){
                alert("invalid user");
            }
            if(error.response.status === 403){
                alert("incorrect password");
            }
            if(error.response.status === 302){
                alert("user is not admin")
            }
        })
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
                        <h1 className='Login-Heading'>Welcome Back</h1>
                    </div>
                    <div className='para1'>
                        <p>Please use the account you have been given to log in</p>
                    </div>
                    <div className='type-box'>
                        <div className='Label1'>
                            <label htmlFor="email">
                                Email
                            </label>
                        </div>
                        <div className='input1'>
                            <i id="emailicon" className="fa fa-envelope icon"></i>
                            <input className='input-field' size={"44"} type="email" placeholder='example@akgec.ac.in' name="email" {...register("email", { required: "**Email is required", pattern: { value: /^[a-zA-Z0-9_\-]{4,}[@][a][k][g][e][c][\.][a][c][\.][i][n]$/i, message: "**This is not a valid email" } })}></input>
                        </div>
                        <p className='alerts'>{errors.email?.message}</p>
                        <div className='Label2'>
                            <label htmlFor="password">
                                Password
                            </label>
                        </div>
                        <div className='input2'>
                            <i id="passlock" className="fa fa-lock icon"></i>
                            <i id="showpass" className="fa fa-eye icon" onClick={() => { setToggle(!toggle) }}></i>
                            <input className='input-field' size={"44"} type={toggle ? "text" : "password"} placeholder='Password' name="password" {...register("password", { required: "**Password is required", minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" } })}></input>
                        </div>
                        <p className='alerts'>{errors.password?.message}</p>
                        <div className='Button'>
                            <SubmitButton className="Login-Button" Label="Login" ></SubmitButton>
                        </div>
                    </div>
                    <div className='Forgot-text'>
                    <Link to={"/forgot"} className='Linker' > <p className='Forgotpassword-text'>Forgot Password?</p></Link>
                       
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Login
