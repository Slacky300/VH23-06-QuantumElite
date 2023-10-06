import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css';
import NotFound from './Components/Errors/404';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import DoctorRegister from './pages/Auth/DoctorRegister';
import ContactUs from './Components/ContactUs';
import PatientRegister from './pages/Auth/PatientRegister';
import VendorRegister from './pages/Auth/VendorRegister';
import Pdash from './pages/Dashboard/Patient/Pdash';
import UserOrder from './pages/Dashboard/Patient/UserOrder';
import Appointment from './pages/Dashboard/Patient/Appointment';
import Doctor from './pages/Doctor';
import Admin from './pages/Admin';
import Vadmin from './pages/Vadmin';
import Video from './pages/Video';
import { getLoggedinUser } from './redux/Auth/authActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoutes from './utils/PrivateRoutes';
import Navbar from './Components/Navbar/Navbar';
import Vdash from './pages/VenderDash/Vdash';
import { useState } from 'react';
import DocDash from './pages/Dashboard/Doctor/DocDash';
import CallHistory from './pages/Dashboard/Doctor/CallHistory';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoggedinUser())
  }, [])


  return (
    <Router>

      <Navbar />

      <Routes>
      <Route path='/' element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/doctorregister' element={<DoctorRegister />} />
          <Route path='/patientregister' element={<PatientRegister />} />
          <Route path='/vendorregister' element={<VendorRegister />} />
          <Route path='/patient' element={<Pdash />} />
          <Route path='/patient/order' element={<UserOrder />} />
          <Route path='/patient/appointment' element={<Appointment />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/video' element={<Video />} />
        </Route>

        <Route path='/doctorregister' element={<DoctorRegister />} />
        <Route path='/patientregister' element={<PatientRegister />} />
        <Route path='/vendorregister' element={<VendorRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/vadmin' element={<Vadmin />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/callhistory' element={<CallHistory />} />
        <Route path='/doctordash' element={<DocDash />} />
        <Route path='/vdash' element={<Vdash />} />





      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
