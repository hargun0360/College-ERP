import React,{useEffect} from 'react'
import './App.css';
import Login from './Pages/Auth/Login/Login'
import Forgotpassword from './Pages/Auth/Forgot/ForgotPassword';
import OTP from './Pages/Auth/OTP/OTP';
import ChangePass from './Pages/Auth/ChangePassword/ChangePass';
import CreatePass from './Pages/Auth/CreatePassword/Createpass';
import {Routes,Route,useLocation , useNavigate} from 'react-router-dom'
import NotFound from './Components/UI/PageNotFound/Page404';
import PrivateRoute from './Pages/Routes/PrivateRoutes';

// *************************** Admin Routings *************************************************


import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import Annoucement from './Pages/Dashboard/Annoucement/Annoucement'
import Batches from './Pages/Dashboard/Admin/Batches/Batches'
import Profile from './Pages/Dashboard/Student/Profile/Profile';
import Holiday from './Pages/Dashboard/Admin/Holidays/Holiday';
import Admins from './Pages/Dashboard/Admin/Admins/Admins';
import Faculty from './Pages/Dashboard/Admin/Faculty/Faculty';
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
import Marks from './Pages/Dashboard/Faculty/Marks/Marks'
import FacFeedback from './Pages/Dashboard/Faculty/Feedback/Feedback';
import FacBatch from './Pages/Dashboard/Faculty/Batches/Batches';
import FacAttendance from './Pages/Dashboard/Faculty/Attendance/Attendance';
import Attandance from './Pages/Dashboard/Student/Attendance/Attendance';
import UploadMarks from './Pages/Dashboard/Faculty/Marks/UploadMarks'

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
            <Route exact path="admin/Dashboard/profile" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
            <Route exact path="admin/Dashboard/holidays" element={
            <PrivateRoute>
              <Holiday />
            </PrivateRoute>} />
            <Route exact path="student/Dashboard/holidays" element={
            <PrivateRoute>
              <Holiday />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/holidays" element={
            <PrivateRoute>
              <Holiday />
            </PrivateRoute>} />
            <Route exact path="admin/Dashboard/Admins" element={
            <PrivateRoute>
              <Admins />
            </PrivateRoute>} />
            <Route exact path="/Dashboard/stuProfile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>} />
            <Route exact path="admin/Dashboard/annoucement" element={
            <PrivateRoute>
              <Annoucement />
            </PrivateRoute>} />
            <Route exact path="admin/Dashboard/Batches" element={
            <PrivateRoute>
              <Batches />
            </PrivateRoute>} />
            <Route exact path="admin/Dashboard/Faculty" element={
            <PrivateRoute>
              <Faculty />
            </PrivateRoute>} />
            <Route exact path="admin/Dashboard/TimeTable" element={
            <PrivateRoute>
              <TimeTable />
            </PrivateRoute>} />
            <Route exact path="admin/Dashboard/Feedback" element={
            <PrivateRoute>
              <Feedback />
            </PrivateRoute>} />
            <Route exact path="student/Dashboard/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>} />
            <Route exact path="student/Dashboard/Annoucements" element={
            <PrivateRoute>
              <Annoucements />
            </PrivateRoute>} />
            <Route exact path="student/Dashboard/Attendance" element={
            <PrivateRoute>
              <Attandance />
            </PrivateRoute>} />
            <Route exact path="student/Dashboard/Result" element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>} />
            <Route exact path="student/Dashboard/Feedback" element={
            <PrivateRoute>
              <Feedbacks />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/Annoucements" element={
            <PrivateRoute>
              <FacAnnoucement />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/profile" element={
            <PrivateRoute>
              <FacProfile />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/Feedback" element={
            <PrivateRoute>
              <FacFeedback />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/Marks" element={
            <PrivateRoute>
              <Marks />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/Batches" element={
            <PrivateRoute>
              <FacBatch />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/Attendance" element={
            <PrivateRoute>
              <FacAttendance />
            </PrivateRoute>} />
            <Route exact path="faculty/Dashboard/marks/upload" element={
            <PrivateRoute>
              <UploadMarks />
            </PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
