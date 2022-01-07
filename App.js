import React from 'react'
import './App.css';
import Login from '../src/Pages/Auth/Login/Login'
import Forgotpassword from './Pages/Auth/Forgot/ForgotPassword';
import OTP from './Pages/Auth/OTP/OTP';
import ChangePass from './Pages/Auth/ChangePassword/ChangePass';
import CreatePass from './Pages/Auth/CreatePassword/Createpass';
import {Routes,Route} from 'react-router-dom'
import Home from '../src/Pages/Home/Home';
import NotFound from './Components/UI/PageNotFound/Page404';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminAnnoucementForm from './Pages/Dashboard/Admin/AdminAnnoucement';
function App() {
  return (
    <div className="App">
     <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/forgot" element={<Forgotpassword />} />
            <Route exact path="/otp" element={<OTP />} />
            <Route exact path="/changepass" element={<ChangePass />} />
            <Route exact path="/createpass" element={<CreatePass />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/form" element={<AdminAnnoucementForm />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
