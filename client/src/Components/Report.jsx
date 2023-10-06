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

const Report = () => {
    const [report, setReport] = useState('')
    const [pincodeOfIncident, setpincodeOfIncident] = useState('')
    const [address, setAddress] = useState('')

    const [selectedDate, setSelectedDate] = useState(null);

    // Calculate the current date
    const currentDate = new Date();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!report.trim()) {
            toast.error('Report is Required !')
            return false
        }
        if (!pincodeOfIncident.trim()) {
            toast.error('PinCode is Required !')
            return false
        }
        if (!address.trim()) {
            toast.error('Address is Required !')
            return false
        }
        try {
            const res = await axios.post('https://womensecbackend.onrender.com/api/v1/incidents',
                { report, pincodeOfIncident, address });

            if (res.status === 201) {
                toast.success('Incident Reported Successfully')
            }
        } catch (err) {
            toast.error('Error in Sending Report')
        }
    }
    return (
        <>
      
      <div className="marginStyle ">
        <div class="container d-flex justify-content-center align-items-center">
          <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
            <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
              <div class="featured-image mb-3 animateImg">
                <img src={reports} class="img-fluid" />
              </div>
            </div>
            <form
              method="post"
              enctype="multipart/form-data"
              class="col-md-6 right-box"
            >
              <div class="row align-items-center">
                <div class="header-text mb-4">
                  <h2>Incident report</h2>
                  <p>We us your Incident, we will take action against it !</p>
                </div>
                <div class="input-group d-flex  align-items-center mb-3">
                  <div class="form-outline flex-fill mb-0"></div>
                </div>

                <div class="input-group d-flex flex-row align-items-center mb-3">
                  
                  
                  
                </div>

                
                <label htmlFor="exampleFormControlSelect1">
                    SELECT DATE
                  </label>
                <div className="input-group-append w-full ">
                    
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={currentDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                    className="form-control custom-datepicker col"
                    style={{ width: "100%", backgroundColor: "white" }}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="exampleFormControlSelect1">
                    SELECT TIME SLOT
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>10 AM</option>
                    <option>11 AM</option>
                    <option>2 PM</option>
                    <option>4 PM</option>
                    <option>5 PM</option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="exampleFormControlSelect1">
                    SELECT ISSUE TYPE
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Dermatalogist</option>
                    <option>ENT</option>
                    <option>Homeopethic</option>
                    <option>...</option>
            
                  </select>
                </div>
                
                <div class="input-group d-flex flex-row align-items-center mb-3 mt-3">
                    <div class="form-outline flex-fill mb-0">
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
                      onClick={handleSubmit}
                      style={{ width: "100%", backgroundColor: "blueviolet" }}
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
      </div>
    </>
    )
}

export default Report