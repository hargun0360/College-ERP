import React, { useEffect, useState } from 'react'
import SubmitButton from '../../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import '../../Admin/AdminDetailForm.css'
import DateTimeBox from '../../Annoucement/DateTimeBox'
import 'react-datepicker/dist/react-datepicker.css'
import * as actionCreators from "../../../../Service/Action/action";
import './Annoucement.css'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../../Components/UI/Spinner/Spinner';
const MakeAnnoucement = (props) => {
    const [batches, setBatches] = useState([]);
    const [batch, setBatch] = useState(null);
    const [flag,setFlag] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const edit = useSelector((state) => state.editAnnoucement);
    const dispatch = useDispatch();
    let today = new Date()
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    const formatAMPM = (time) => {
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const onSubmit = (data, e) => {
        e.preventDefault();
        if(batch===null){
            setFlag(true)
        }else{
            const obj = {
                date: today,
                time: formatAMPM(new Date),
                announcement: data.Announcement,
                annfor: data.aopt,
            }
            console.log(obj);
            // dispatch(actionCreators.addAnnoucementDetails(obj));
            reset();
        }
        
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }
    const handleBatchDropdown = (e) => {
        setBatch(e.target.value);
    }

    return (props.trigger) ? (
        <div className='Modal-box'>
            <div className='Admin-Form'>
                <div className='Admin-Form-Heading'>
                    <h2>Announcement Details</h2>
                </div>
                <div>
                    <form className='Admin-Input' onSubmit={handleSubmit(onSubmit)}>
                        <DateTimeBox />
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Announcement">
                                    Announcement
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <textarea className='input-field-form' cols={40} rows={5} type="text" name="Announcement" {...register("Announcement", { required: "**Announcement field is required" })}></textarea>
                            </div>
                            <p className='alerts'>{errors.Announcement?.message}</p>
                        </div>
                        <div className='Batchdrop'>
                            <select id="batchdrop"  onChange={handleBatchDropdown}>
                                <option selected="selected" hidden>Select Batch</option>
                                {
                                    batches.map((b) => (
                                        <option key={b._id} name={b._id} value={b._id}>{b._id}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {flag ? <p className='alerts'>**Batch Required</p> : null}
                        <div className='Button-update'>
                            <SubmitButton className="Admin-Update" Label="Post" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross1'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    ) : null
}

export default MakeAnnoucement
