import React from 'react'
import './App.css';
import Login from '../src/Pages/Auth/Login/Login'
import Forgotpassword from './Pages/Auth/Forgot/ForgotPassword';
import OTP from './Pages/Auth/OTP/OTP';
import ChangePass from './Pages/Auth/ChangePassword/ChangePass';
import CreatePass from './Pages/Auth/CreatePassword/Createpass';
function App() {
  return (
    <div className="App">
    
   <Login />
    <Forgotpassword />
    <OTP />
    <ChangePass />
    <CreatePass />
    </div>
  );
}

export default App;
