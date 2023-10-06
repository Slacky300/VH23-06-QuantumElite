import React, { useEffect, useState } from 'react'
import Report from '../Components/Report'
import Navbar from '../Components/Navbar/Navbar'
import axios from 'axios'
const host = 'https://telemedix-backend.onrender.com'

const Doctor = () => {

  const [doctor, setDoctor] = useState([])

  const getDoctors = async () => {
    const { data } = await axios.get(`${host}/api/v1/doctor/all-doctors`)
    setDoctor(data)
    console.log(data)
  }

  useEffect(() => {
    getDoctors()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='marginStyle'>
        <div class="container">
          <div class="row text-center">
            <h5 className="text-center" style={{ color: '#3d86e8' }}>Our Doctors for your Safety</h5>
            <h1 className="text-center mb-5">Our Doctors</h1>
            {doctor.map((c) => (
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white py-5 px-4 cardStyle">
                  <img data-bs-toggle="modal" data-bs-target="#exampleModal1" src="https://www.ankurahospitals.com/wp-content/uploads/2021/03/our-doctor-placeholder.jpg" alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">{c.fullName}</h5>
                  <h6 class="small text-uppercase text-muted my-3">{c.speciality}</h6>
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn text-white' style={{ backgroundColor: '#3d86e8' }}>Make Appointment</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
          <div class="modal-content">
            <Report />
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="container d-flex justify-content-center align-items-center ">
              <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                <div class="row align-items-center my-3">
                  <div class="header-text mb-4">
                    <h5>Dr. NAME Description : </h5>
                  </div>
                  <p>Name : <span> kaka</span></p>
                  <p>Specialization : <span> kaka</span></p>
                  <p>Email : <span> kaka</span></p>
                  <p>Phone : <span> kaka</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor