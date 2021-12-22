import React from 'react'
import './App.css';
import Login from '../src/Pages/Auth/Login/Login'
import Forgotpassword from './Pages/Auth/Forgot/ForgotPassword';
import OTP from './Pages/Auth/OTP/OTP';
function App() {
  return (
    <div className="App">
    
   <Login />
    <Forgotpassword />
    <OTP />
    </div>
  );
}

export default App;
