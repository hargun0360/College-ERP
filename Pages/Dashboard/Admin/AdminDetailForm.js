import React, { useState,useEffect } from 'react'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import './AdminDetailForm.css'
import * as actionCreators from "../../../Service/Action/action";
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../Components/UI/Spinner/Spinner';
import profile from '../../../Assets/Imagesused/Profile.png'
const AdminDetailForm = (props) => {
    const [avatarPreview, setAvatarPreview] = useState(profile);
    const [avatar,setAvatar] = useState(profile)
    const get = useSelector((state) => state.updateAdmin);
    useEffect(()=>{
        if(get.isUpdated){
            const obj=Object.fromEntries(get.isUpdated)
            console.log(obj.image);
            setAvatarPreview(obj.image);
        }
    },[get.loading])
    const { loading } = useSelector(state => state.userdetails)
    const { admin } = useSelector((state) => state.getAdmin);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
        defaultValues: {
            fullname: (admin) ? admin.profile.fullname : "",
            email: (admin) ? admin.profile.email : "",
            mobilenumber: (admin) ? admin.profile.mobile : "",
            qualification: (admin) ? admin.profile.degree : "",
        },
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("fullname", data.fullname);
        myForm.set("email", data.email);
        myForm.set("mobile", data.mobilenumber);
        myForm.set("degree", data.qualification);
        myForm.set("image", avatar);
        dispatch(actionCreators.UpdateAdminDetails(myForm))
        console.log(Object.fromEntries(myForm));
        e.target.reset();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }
    const handleChange = (e) => {
        console.log(e.target.files[0]);
         if ( e.target.files && e.target.files[0]) {
            setAvatar(e.target.files[0]);
            setAvatarPreview(URL.createObjectURL(e.target.files[0]));
            console.log(e.target.files[0]);
        }
    }

    return loading ? (<Spinner />) : (props.trigger) ? (
        <div className='Modal-box'>
            <div className='Admin-Form'>
                <div className='Admin-Form-Heading'>
                    <h2>Fill Personal Details</h2>
                </div>
                <div>
                    <form className='Admin-Input' encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
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
                        <div id="registerImage">
                            <img src={avatarPreview} alt="Avatar Preview" />
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                title=''
                                onChange={handleChange}
                            />
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
    ) : null;
}

export default AdminDetailForm
