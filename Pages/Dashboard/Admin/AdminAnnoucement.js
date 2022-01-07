import React,{useState} from 'react'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import './AdminDetailForm.css'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
const AdminAnnoucementForm = (props) => {
    const [selectdate, setSelectDate] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        reset();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setTrigger(false);
    }
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
    return  (
        <div className='Modal-box'>
            <div className='Admin-Form'>
                <div className='Admin-Form-Heading'>
                    <h2>Announcement Details</h2>
                </div>
                <div>
                    <form className='Admin-Input' onSubmit={handleSubmit(onSubmit)}>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Date">
                                    Date
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <DatePicker selected={selectdate}
                                    onChange={date => setSelectDate(date)}
                                    isClearable
                                    minDate={new Date()}
                                    maxDate={new Date()} />
                            </div>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Time">
                                    Time
                                </label>
                            </div>
                            <div className='Input-detail1'>
                                <input className='input-field-form2' size={"40"} value={formatAMPM(new Date)} disabled={true}></input>
                            </div>
                            <p className='alerts'>{errors.email?.message}</p>
                        </div>
                        <div className='combine-input'>
                            <div className='Label-form'>
                                <label htmlFor="Announcement">
                                    Announcement
                                </label>
                            </div>
                            <div className='Input-detail'>
                                <textarea className='input-field-form' cols={40} type="text" name="mobilenumber" {...register("mobilenumber", { required: "**Mobile Number is required", pattern: { value: /^[6789][0-9]{9}$/i, message: "**This is not a valid mobile number" } })}></textarea>
                            </div>
                            <p className='alerts'>{errors.mobilenumber?.message}</p>
                        </div>
                        <div className='Button-update'>
                            <SubmitButton className="Admin-Details-Update" Label="Post" ></SubmitButton>
                        </div>
                    </form>
                </div>
                <div className='cross1'>
                    <i id="crossed" className="fa fa-times" onClick={handleClick} ></i>
                </div>
            </div>
        </div>
    ) 
}

export default AdminAnnoucementForm
