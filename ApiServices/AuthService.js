import axios from './Interceptor';

class AuthServices {
    login(loginas,data) { 
        return axios.post(`/login/${loginas}`,data)
    }
    otp(data){  
        return axios.post("/signup/otp",data)
      }
      otpResend(data){ 
        return axios.post('/signup/otp-resend',data)
    }
}

export default new AuthServices();