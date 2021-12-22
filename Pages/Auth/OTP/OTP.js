import React,{useState} from 'react'
import Image from '../../../Components/UI/Images/Image'
import SubmitButton from '../../../Components/UI/Button/Button'
import { useForm } from 'react-hook-form'
import '../Login/Login.css'
import illustrate from '../../../Assets/Imagesused/forgot.png'
import '../Forgot/Forgot.css'
import './OTP.css'

const OTP = () => {

    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const[popup,setPopup]=useState(false);
const [disable, setDisable] = useState(false);

   const handleClick = ()=>{
       
          
           setDisable(true);
           
       
   }
   setTimeout(() => {
    setDisable(false);
}, 20000);

setTimeout(() => {
    setPopup(true);
}, 10000);

    return (
        <div className='Container'>
            <div className='illustration-box'>
                <Image imge={illustrate} />
            </div>
            <div>
                <form className='Login-Box' onSubmit={handleSubmit}>
                    <div className='Heading2'>
                        <h1 className='Login-Heading3'>OTP Verification</h1>
                    </div>
                    <div className='para3'>
                        <p>Enter One Time Password(OTP) sent to your email.</p>
                    </div>
                    <div className='type-box'>
                        <div className='input1'>
                            <input className='input-field' size={"44"} type="text" placeholder='Confirmation code' name="otp" {...register("otp", { required: "**OTP is required" })}></input>
                        </div>
                        <p className='alerts'>{errors.otp?.message}</p>

                    </div>
                </form>

                <div className='Button1'>
                <button className="Verify-Button1" type='submit' onClick={handleSubmit((d) =>{
                            console.log(d)
                            reset();
                } )} > Verify </button>

                        
                {popup && <div className='Button-Resed'>
                            <button className="Resend-Button" disabled={disable} type='submit' onClick={handleClick} >Resend</button>
                        </div>}
                        </div>
                
            </div>

        </div>
    )
}

export default OTP
