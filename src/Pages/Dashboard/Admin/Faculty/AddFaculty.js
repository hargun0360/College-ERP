import React, { useState, useEffect } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { set, useForm } from 'react-hook-form'
import * as actionCreators from "../../../../Service/Action/action";
import { useDispatch, useSelector } from 'react-redux'
import './Faculty.css'
import Autocomplete from 'react-autocomplete'
const AddFaculty = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched",
    });
    const [flag,setFlag] = useState(false);
    const [value, setValue] = useState('');
    const onSubmit = (data, e) => {
        e.preventDefault();
        if(value==''){
            setFlag(true);
        }else{
            //post api
        }

    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className='Modal-box1'>
            <div className='AddAdmin-Form'>
                <div className='EditDetails-Heading' style={{ marginBottom: "5%" }}>
                    <h2>Add Faculty</h2>
                </div>
                <div>
                    <form className='EditDetails-Form-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input' style={{ marginBottom: "3%" }}>
                            <div className='Label-form'>
                                <label htmlFor="Full-Name">
                                    Name
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"32"} type="text" name="Name" {...register("Name", { required: "**Name is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.Name?.message}</p>
                        </div>
                        <div className='combine-input' style={{ margin: "5% 0%" }}>
                            <div className='Label-form'>
                                <label htmlFor="Email">
                                    Email
                                </label>
                            </div>
                            <div className='Input-detail1'>
                                <i id="emailicon1" className="fa fa-envelope icon"></i>
                                <input className='input-field-form1' size={"30"} type="email" placeholder='example@akgec.ac.in' name="email" {...register("email", { required: "**Email is required", pattern: { value: /^[a-zA-Z0-9_\-]{4,}[@][a][k][g][e][c][\.][a][c][\.][i][n]$/i, message: "**This is not a valid email" } })}></input>
                            </div>
                            <p className='alerts'>{errors.email?.message}</p>
                        </div>
                        <div className='combine-input' style={{ marginBottom: "6%" }}>
                            <Autocomplete
                                items={[
                                    { id: "1", sub: "maths" },
                                    { id: "2", sub: "phy" },
                                    { id: "3", sub: "chem" },
                                    { id: "4", sub: "react" },
                                    { id: "5", sub: "node" },
                                    { id: "6", sub: "Django" },
                                    { id: "7", sub: "spring" },
                                    { id: "8", sub: "android" },
                                    { id: "9", sub: "designer" },
                                    { id: "10", sub: "science" },
                                    { id: "11", sub: "manish" },
                                    { id: "12", sub: "bhavya" },
                                    { id: "13", sub: "hargun" },
                                    { id: "14", sub: "mohit" },
                                ]}
                                shouldItemRender={(item, value
                                ) => item.sub.toLowerCase()
                                    .indexOf(value.toLowerCase()) > -1}
                                getItemValue={item => item.sub}
                                renderItem={(item, isHighlighted) =>
                                    <div style={{
                                        background: isHighlighted ?
                                            'rgb(233 227 227)' : 'white',
                                        padding: "1px 10px",
                                    }}
                                        key={item.id}>
                                        {item.sub}
                                    </div>
                                }
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                onSelect={(val) => setValue(val)}
                                renderInput={(params) => (
                                    
                                    <input {...params} required={value.length === 0} />
                                )}
                                inputProps={{
                                    style: {
                                        width: "287px",
                                        height: "32px",
                                        background: "#F7F7F7",
                                        border: "1px transparent",
                                        padding: "12px",
                                        borderRadius: "4px",
                                        marginBottom: "7%",
                                        
                                    },
                                    placeholder: '--Search Subject--'
                                }}
                                menuStyle={{
                                    borderRadius: "3px",
                            boxShadow: "rgb(0 0 0 / 10%) 0px 2px 12p",
                            background: "rgba(255, 255, 255, 0.9)",
                            padding:" 2px 0px",
                            fontSize: "90%",
                            position: "fixed",
                            overflow: "auto",
                            maxHeight: "18%",
                            left: "477.415px",
                            top: "351.957px",
                            minWidth: "286.989px",
                            fontFamily:"'Inter', sans-serif"
                                   }}
                            />
                        </div>
                       
                        <div className='combine-input' style={{ marginBottom: "3%" }}>
                            <div className='Label-form'>
                                <label htmlFor="Password">
                                    Password
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <input className='input-field-form' size={"32"} type="text" name="password" {...register("password", { required: "**Password is required", })}></input>
                            </div>
                            <p className='alerts'>{errors.password?.message}</p>
                        </div>
                        <div className='EditDetail-btn'>
                            <SubmitButton className="EditDetail-button" Label="Add Faculty" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross-icon'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    ) : null;
}

export default AddFaculty
