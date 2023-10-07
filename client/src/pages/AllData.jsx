import React from 'react'
import { useState, useEffect } from 'react'
import { getDoctors, getDoctorById } from '../redux/Doctors/doctorActions';
import { getPatient, getPatientById } from '../redux/patients/patientActions';

import { useDispatch, useSelector } from 'react-redux';



const AllData = () => {

    const dispatch = useDispatch();
    const [doctorId,setDoctorID]= useState(null);
    const doctors = useSelector((state) => state?.doctors?.doctors);
    const doctorById = useSelector((state) => state?.doctors?.doctorById);

    const handleFetchDoctorByID = (id) => {
        dispatch(getDoctorById(id));
    
      }

      useEffect(() => {
        dispatch(getDoctors());
      }, [dispatch]);


      


  return (
    <div style={{marginTop:'80px'}}>

        
<h2 className='text-center'>Doctors Data</h2>
<table class="table " >

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {doctors?.map((c)=>(
    
    <tr>
      <th scope="row">#</th>
      <td>{c?.fullName}</td>
      <td>{c.doctorId}</td>
      <td>{c.email}</td>
    </tr>
    ))}
  </tbody>
</table>

<h2 className='text-center'>Patient Data</h2>
<table class="table " >

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {doctors?.map((c)=>(
    
    <tr>
      <th scope="row">#</th>
      <td>{c?.fullName}</td>
      <td>{c.doctorId}</td>
      <td>{c.email}</td>
    </tr>
    ))}
  </tbody>
</table>


    </div>
  )
}

export default AllData