import axios from './Interceptor';

class AuthServices {
    login(user,data) { 
        return axios.post(`auth/login?user=${user}`,data)
    }
    forgot(user,data){  
        return axios.post(`auth/verifybeforereset?user=${user}`,data)
      }
      otp(data){ 
        return axios.post('auth/checkotpbeforereset',data)
    }
    resendotp(data){ 
        return axios.post('auth/resendotp',data)
    }
    resetpass(user,data){ 
        return axios.post(`auth/resetpassword?user=${user}`,data)
    }
    logout(){
        localStorage.clear();
     }
}

export default new AuthServices();