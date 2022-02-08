import React, { useState, useEffect } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { set, useForm } from 'react-hook-form'
import * as actionCreators from "../../../../Service/Action/FacultyAction";
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import Toaster from '../../../../Components/UI/Toaster/Toaster';
import AuthService from '../../../../ApiServices/AuthService'
const EditDetails = (props) => {
    const [email , setEmail] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
        defaultValues:{
            email:email
        }
    });
    const dispatch = useDispatch();
    const id=localStorage.getItem("studentid");
    if(id){
        console.log(id);
    }
    
    useEffect(()=>{
        if(id){
            loadEmail();
        }
            
    },[reset])
    const loadEmail = async () =>{
        try {
            const res = await AuthService.getEachStudent(id);
            console.log(res);
            setEmail(res.data.profile.email);
            const obj = {
                email:res.data.profile.email,
            } 
            console.log(obj)
            reset(obj)
        } catch (error) {
            console.log(error);
        }
        
    }
    const onSubmit = (data, e) => {
        e.preventDefault();
        const obj = {
            email:data.email
        }
        AuthService.EditUser(obj,id)
        .then((res) => {
            console.log(res);
            if(res){
                toast.success("Updated Successfully")
            }
            dispatch(actionCreators.Edit(false))
        }).catch((e)=>{
            console.log(e);
        })
       e.target.reset();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }

    return (props.trigger) ?  (
        <div className='Modal-box'>
            <div className='EditDetails-Form'>
                <div className='EditDetails-Heading' style={{marginBottom:"5%"}}>
                    <h2>Edit Details</h2>
                </div>
                <div>
                    <form className='EditDetails-Form-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input' style={{margin:"5% 0%"}}>
                            <div className='Label-form'>
                                <label htmlFor="Email">
                                    Email
                                </label>
                            </div>
                            <div className='Input-detail1'>
                                <i id="emailicon1" className="fa fa-envelope icon"></i>
                                <input className='input-field-form1' size={"32"} type="email" placeholder='example@akgec.ac.in' name="email" {...register("email", { required: "**Email is required", pattern: { value: /^[a-zA-Z0-9_\-]{4,}[@][a][k][g][e][c][\.][a][c][\.][i][n]$/i, message: "**This is not a valid email" } })}></input>
                            </div>
                            <p className='alerts'>{errors.email?.message}</p>
                        </div>
                        <div className='EditDetail-btn'> 
                            <SubmitButton className="EditDetail-button" Label="Update" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross-icon'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
            <Toaster />
        </div>
    ) : null;
}

export default EditDetails
