import React, { useState,useEffect } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import Spinner from '../../../../Components/UI/Spinner/Spinner';
import profile from '../../../../Assets/Images/Profile.png'
import AuthService from '../../../../ApiServices/AuthService';
import './Profile.css'
const StudentEditDetails = (props) => {
    const [avatar,setAvatar] = useState(profile)
    const user = localStorage.getItem("userd");
    const [image,setImage] = useState(profile);
    const id = localStorage.getItem("userid");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [branch,setBranch] = useState( [{ id: "1", batch: "CSE" }, { id: "2", batch: "IT" }, { id: "3", batch: "ECE" }, { id: "4", batch: "EN" }]);
    const [mobile,setMobile] = useState("");
    const [degree,setDegree] = useState("");
    const [loading,setLoading] = useState(true);
    const [flag,setFlag] = useState(false);
    const [preview,setPreview] = useState(profile);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
        // defaultValues: {
        //     fullname: name,
        //     email: email,
        //     mobilenumber: mobile,
        //     qualification: degree,
        // },
    });
     
    const handleBranchDropdown = (e) => {
        setBranch(e.target.value);
    }
    const onSubmit = (data, e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("fullname", data.fullname);
        myForm.set("email", data.email);
        myForm.set("mobile", data.mobilenumber);
        myForm.set("degree", data.qualification);
        myForm.set("image", avatar);
        AuthService.updateAdminDetails(myForm,user,id)
        .then((res) => {
            console.log(res);
            setFlag(false)
        }).catch((e => {
            console.log(e);
        }))
        e.target.reset();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }
    const handleChange = (e) => {
        setFlag(true);
        console.log(e.target.files[0]);
         if ( e.target.files && e.target.files[0]) {
            setAvatar(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]))
            setImage(URL.createObjectURL(e.target.files[0]));
            console.log(e.target.files[0]);
        }
    }
    
    return  (
        <div className='Modal-box-2'>
            <div className='Student-Form'>
                <div className='Student-Form-Heading'>
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
                        <div className='Batch-Dropdown'>
                    <select id="branch-drop" disabled={flag} onChange={handleBranchDropdown}>
                        <option selected="selected" hidden>Select Branch</option>
                        {
                            branch.map((b) => (
                                <option key={b.id} name={b.id} value={b.batch}>{b.batch}</option>
                            ))
                        }
                    </select>
                    </div>
                </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="University Roll Number">
                                    University Roll Number
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"40"} type="text" name="roll" {...register("roll", { required: "**Qualification is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.qualification?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Father Name">
                                    Father Name
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"40"} type="text" name="father" {...register("father", { required: "**Qualification is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.father?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Mother Name">
                                    Mother Name
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"40"} type="text" name="mother" {...register("mother", { required: "**Qualification is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.mother?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Address">
                                    Address
                                </label>
                            </div>
                            <div className='Input-detail'>
                            <textarea className='input-field-form' cols={40} rows={4} type="text" name="address" {...register("address", { required: "**Address field is required" })}></textarea>
                            </div>
                            <p className='alerts'>{errors.address?.message}</p>
                        </div>
                        <div id="registerImage">
                            <img src={flag ?  `https://ourcollege.herokuapp.com/${image}` : preview} alt="Avatar Preview" />
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                title=''
                                onChange={handleChange}
                            />
                        </div>
                        <div className='Button-update-3'>
                            <SubmitButton className="Admin-Details-Update" Label="Update" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross-icon-1'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    );
}

export default StudentEditDetails