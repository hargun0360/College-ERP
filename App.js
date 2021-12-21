import React from 'react'
import './App.css';
import Login from '../src/Pages/Auth/Login/Login'
import Forgotpassword from './Pages/Auth/Forgot/ForgotPassword';
function App() {
  return (
    <div className="App">
    
   <Login />
    <Forgotpassword />
    </div>
  );
}

export default App;
