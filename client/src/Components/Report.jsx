import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'
import reports from '../images/report.png'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addAppointment } from '../redux/Appointment/appointmentActions'
import { useDispatch } from 'react-redux'
const Report = () => {

  const dispatch = useDispatch();

  const currentDate = new Date();
  const [address,setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [description, setDescription] = useState('');


  return (
    <>
      <>
        <div class="container d-flex justify-content-center align-items-center">
          <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
            <form
              method="post"
              enctype="multipart/form-data"
              class="col-md-12 right-box"
            >
              <div class="row align-items-center">
                <div class="header-text mb-2">
                  <h2>Appointment</h2>
                  <p>We us your Incident, we will take action against it !</p>
                </div>
                <label htmlFor="exampleFormControlSelect1">
                  Date
                </label>
                <div className="input-group-append row" style={{ marginLeft: '0px' }}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={currentDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    className="form-control border-dark"
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="exampleFormControlSelect1">
                    Time Slot
                  </label>
                  <select
                    className="form-control border-dark"
                    id="exampleFormControlSelect1"
                  >
                    <option>10 AM</option>
                    <option>11 AM</option>
                    <option>2 PM</option>
                    <option>4 PM</option>
                    <option>5 PM</option>
                  </select>
                </div>

                <div class="input-group d-flex flex-row align-items-center mb-3 mt-3">
                  <div class="form-outline flex-fill mb-0">
                    <label htmlFor="exampleFormControlSelect1">
                      Issue Detail
                    </label>
                    <textarea
                      rows={3}
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      class="form-control form-control-lg border-dark fs-6"
                      placeholder="Describe the issue"
                      required
                    />
                  </div>
                </div>


                <div class="d-flex flex-row align-items-center my-3 ">
                  <div class="form-outline flex-fill mb-0 ">
                    <button
                      className="btn text-white btn-lg btn-block"
                     
                      style={{ width: "100%", backgroundColor: "#3d86e8" }}
                      type="submit"
                    >
                      Make An Appointment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  )
}

export default Report