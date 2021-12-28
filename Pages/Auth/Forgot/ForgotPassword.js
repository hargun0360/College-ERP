import React from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import '../Login/Login.css'
import illustrate from '../../../Assets/Imagesused/forgot.png'
import './Forgot.css'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../../ApiServices/AuthService'
import * as actionCreators from "../../../Service/Action/action";
import { useSelector, useDispatch } from 'react-redux'
const Forgotpassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mystate = useSelector((state) => state.emailReducer.user);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        AuthService.forgot(mystate, data)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(actionCreators.userEmail(data.email));
                    alert("otp sent");
                    console.log(res);
                    navigate('/otp');
                }

            }).catch((error) => {
                console.log(error);
                console.log(error.response);
                if (error.response.status === 400) {
                    alert("invalid user");
                }
                else if (error.response.status === 500) {
                    alert("network Error!");
                }
                else {
                    navigate("/Page404");
                }
            })
        reset();
    }

    return (
        <div className='Container'>
            <div className='illustration-box'>
                <Image imge={illustrate} />
            </div>
            <div>
                <form className='Login-Box' onSubmit={handleSubmit(onSubmit)}>
                    <div className='Heading2'>
                        <h1 className='Login-Heading'>Forgot Password</h1>
                    </div>
                    <div className='type-box'>
                        <div className='para2'>
                            <p>Please provide the email address you have been given to log in.</p>
                        </div>
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
                        <div className='Button'>
                            <SubmitButton className="Next-Button" Label="Next" ></SubmitButton>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Forgotpassword
