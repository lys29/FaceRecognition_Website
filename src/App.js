import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashUpdateFaceRecognition from './pages/Dashboard/DashUpdateFaceRecognition.jsx';
import DashAddFaceRecognition from './pages/Dashboard/DashAddFaceRecognition.jsx';
import DashUpdateStudent from './pages/Dashboard/DashUpdateStudent.jsx';
import DashAddStudent from './pages/Dashboard/DashAddStudent.jsx';
import DashAttendance from './pages/Dashboard/DashAttendance.jsx';
import DashCamera from './pages/Dashboard/DashCamera.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ContactUsPage from './pages/ContactPage.jsx';
import AboutUsPage1 from './pages/AboutUsPage1.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import LPage1 from './pages/LPage1.jsx';
import LPage from './pages/LPage.jsx';
import ContactUsPage1 from './pages/ContactPage1.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LPage/>} />
        <Route path="/home" element={<LPage1/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/about-us" element={<AboutUsPage1/>} />
        <Route path="/contact-us" element={<ContactUsPage/>} />
        <Route path="/contact-us-page" element={<ContactUsPage1/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/dashboard-camera" element={<DashCamera/>} />
        <Route path="/dashboard-attendance" element={<DashAttendance/>} />
        <Route path="/dashboard-add-student" element={<DashAddStudent/>} />
        <Route path="/dashboard-update-student" element={<DashUpdateStudent/>} />
        <Route path="/dashboard-add-face" element={<DashAddFaceRecognition/>} />
        <Route path="/dashboard-update-face" element={<DashUpdateFaceRecognition/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
