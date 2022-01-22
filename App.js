import React from 'react'
import './App.css';
import Login from '../src/Pages/Auth/Login/Login'
import Forgotpassword from './Pages/Auth/Forgot/ForgotPassword';
import OTP from './Pages/Auth/OTP/OTP';
import ChangePass from './Pages/Auth/ChangePassword/ChangePass';
import CreatePass from './Pages/Auth/CreatePassword/Createpass';
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/UI/PageNotFound/Page404';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminAnnoucementForm from './Pages/Dashboard/Admin/AdminAnnoucement';
import Annoucement from './Pages/Dashboard/Annoucement/Annoucement'
import DateTimeBox from './Pages/Dashboard/Annoucement/DateTimeBox'
import Batches from './Pages/Dashboard/Admin/Batches/Batches'
import AddBatch from './Pages/Dashboard/Admin/Batches/AddBatch'
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
            <Route exact path="admin/Dashboard/profile" element={<Dashboard />} />
            <Route exact path="/form" element={<AdminAnnoucementForm />} />
            <Route exact path="/batch" element={<AddBatch />} />
            <Route exact path="admin/Dashboard/annoucement" element={<Annoucement />} />
            <Route exact path="admin/Dashboard/Batches" element={<Batches />} />
            <Route exact path="/date" element={<DateTimeBox />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
