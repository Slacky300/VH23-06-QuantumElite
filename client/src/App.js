import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css';
import NotFound from './Components/Errors/404';
import Home from './pages/Home'
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import DoctorRegister from './pages/Auth/DoctorRegister';
import Emergency from './pages/Emergency';
import Report from './pages/Report';
import Incident from './pages/IncidentReport'
import CloseFile from './pages/CloseFile'
import ContactUs from './Components/ContactUs';
import ChatScreen from './pages/ChatScreen'
import PatientRegister from './pages/Auth/PatientRegister';
import VendorRegister from './pages/Auth/VendorRegister';
import Pdash from './pages/Dashboard/Patient/Pdash';
import Navbar from './Components/Navbar/Navbar';
import UserOrder from './pages/Dashboard/Patient/UserOrder';
import Appointment from './pages/Dashboard/Patient/Appointment';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NotFound/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/doctorregister' element={<DoctorRegister/>} />
      <Route path='/patientregister' element={<PatientRegister/>} />
      <Route path='/vendorregister' element={<VendorRegister/>} />
      <Route path='/report' element={<Report/>} />
      <Route path='/emergency' element={<Emergency/>} />
      <Route path='/incident' element={<Incident/>} />
      <Route path='/closedreport' element={<CloseFile/>} />
      <Route path='/chat' element={<ChatScreen/>} />
      <Route path='/patient' element={<Pdash/>} />
      <Route path='/patient/order' element={<UserOrder/>} />
      <Route path='/patient/appointment' element={<Appointment/>} />

      

      </Routes>
      <Toaster />
    </Router>
  
  )
  ;
  
}

export default App;
