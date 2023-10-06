import React, { useEffect, useState } from 'react';
import Appointment from '../Components/Appointment';
import Navbar from '../Components/Navbar/Navbar';
import { getDoctors, getDoctorById } from '../redux/Doctors/doctorActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserDoctor } from 'react-icons/fa6'

const Doctor = () => {
  const dispatch = useDispatch();
  const [doctorID, setDoctorID] = useState(null);
  const doctors = useSelector((state) => state?.doctors?.doctors);
  const doctorById = useSelector((state) => state?.doctors?.doctorById);

  const handleFetchDoctorByID = (id) => {
    dispatch(getDoctorById(id));

  }

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  useEffect(() => {

    console.log('doctorID', doctorID);
  }, [doctorID]);

  return (
    <div>
      <div className='marginStyle'>
        <div className="container">
          <div className="row text-center">
            <h5 className="text-center" style={{ color: '#3d86e8' }}>Our Doctors for your Safety</h5>
            <h1 className="text-center mb-5">Our Doctors</h1>
            {doctors?.map((c) => (
              <div className="col-xl-3 col-sm-6" key={c.doctorId}>
                <div className="bg-white py-5 px-4 cardStyle">
                  <img
                    onClick={() => handleFetchDoctorByID(c?.doctorId)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    src="https://www.ankurahospitals.com/wp-content/uploads/2021/03/our-doctor-placeholder.jpg"
                    alt=""
                    width="100"
                    className="mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">{c?.fullName}</h5>
                  <h6 className="small text-uppercase text-muted my-3">{c?.speciality}</h6>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className='btn text-white'
                    onClick={() => {
                      setDoctorID(c.doctorId)
                    }}
                    style={{ backgroundColor: '#3d86e8' }}
                  >
                    Make Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <Appointment doctorID={doctorID} />
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered mt-3">
          <div className="modal-content">
            <div className="container d-flex justify-content-center align-items-center ">
              <div className="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                <div className="row align-items-center my-3">
                  <div className="header-text mb-4">
                    <h5>Dr. NAME Description:</h5>
                  </div>
                  <p>Name: <span> {doctorById?.fullName}</span></p>
                  <p>Speciality: <span> {doctorById?.speciality || "Speciality Not Added"}</span></p>
                  <p>Email: <span> {doctorById?.email}</span></p>
                  <p>Phone: <span> {doctorById?.phone || ''}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
