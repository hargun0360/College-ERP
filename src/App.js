import React from 'react'
import './App.css';
import Login from './Pages/Auth/Login/Login'
import Forgotpassword from './Pages/Auth/Forgot/ForgotPassword';
import OTP from './Pages/Auth/OTP/OTP';
import ChangePass from './Pages/Auth/ChangePassword/ChangePass';
import CreatePass from './Pages/Auth/CreatePassword/Createpass';
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/UI/PageNotFound/Page404';

// *************************** Admin Routings *************************************************


import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminAnnoucementForm from './Pages/Dashboard/Admin/AdminAnnoucement';
import Annoucement from './Pages/Dashboard/Annoucement/Annoucement'
import DateTimeBox from './Pages/Dashboard/Annoucement/DateTimeBox'
import Batches from './Pages/Dashboard/Admin/Batches/Batches'
import Profile from './Pages/Dashboard/Student/Profile/Profile';
import StudentEditDetails from './Pages/Dashboard/Student/Profile/StudentEditDetails';
import Holiday from './Pages/Dashboard/Admin/Holidays/Holiday';
import Admins from './Pages/Dashboard/Admin/Admins/Admins';
import Faculty from './Pages/Dashboard/Admin/Faculty/Faculty';
import AddStudent from './Pages/Dashboard/Admin/Batches/AddStudent'
import TimeTable from './Pages/Dashboard/Admin/Time Table/TimeTable'
import Feedback from './Pages/Dashboard/Admin/Feedback/Feedback'

// *************************** Student Routings *************************************************

import Annoucements from './Pages/Dashboard/Student/Annoucement/Annoucement';
import Attendance from './Pages/Dashboard/Student/Attendance/Attendance';
import Result from './Pages/Dashboard/Student/Result/Result'
import Feedbacks from './Pages/Dashboard/Student/Feedback/Feedback'


// *************************** Faculty Routings *************************************************

import FacAnnoucement from './Pages/Dashboard/Faculty/Annoucement/Annoucement'
import FacProfile from './Pages/Dashboard/Faculty/Profile/Profile'

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
            <Route exact path="admin/Dashboard/holidays" element={<Holiday />} />
            <Route exact path="student/Dashboard/holidays" element={<Holiday />} />
            <Route exact path="/detail" element={<StudentEditDetails />} />
            <Route exact path="admin/Dashboard/Admins" element={<Admins />} />
            <Route exact path="/time" element={<AddStudent />} />
            <Route exact path="/Dashboard/stuProfile" element={<Profile />} />
            <Route exact path="admin/Dashboard/annoucement" element={<Annoucement />} />
            <Route exact path="admin/Dashboard/Batches" element={<Batches />} />
            <Route exact path="admin/Dashboard/Faculty" element={<Faculty />} />
            <Route exact path="admin/Dashboard/TimeTable" element={<TimeTable />} />
            <Route exact path="admin/Dashboard/Feedback" element={<Feedback />} />
            <Route exact path="student/Dashboard/profile" element={<Profile />} />
            <Route exact path="student/Dashboard/Annoucements" element={<Annoucements />} />
            <Route exact path="student/Dashboard/Attendance" element={<Attendance />} />
            <Route exact path="student/Dashboard/Result" element={<Result />} />
            <Route exact path="student/Dashboard/Feedback" element={<Feedbacks />} />
            <Route exact path="faculty/Dashboard/Annoucements" element={<FacAnnoucement />} />
            <Route exact path="faculty/Dashboard/profile" element={<FacProfile />} />
            <Route exact path="/date" element={<DateTimeBox />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
