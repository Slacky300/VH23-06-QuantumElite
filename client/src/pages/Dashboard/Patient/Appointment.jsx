import React, { useEffect, useState } from 'react'
import UserMenu from './UserMenu'
import { GiCancel } from 'react-icons/gi'
import { getAllotmentByPatient } from '../../../redux/Appointment/appointmentActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allotmentByUserID = useSelector((state) => state?.appointment?.allotmentByUser)

    const handleConnectVideo = (id) => {
        navigate(`/room/${id}/`)
        window.location.reload()
    }

    useEffect(() => {
        dispatch(getAllotmentByPatient())
    }, [])


    return (
        <div className='container marginStyle'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9 '>
                        <div className="col-md-12">
                            <div className='container-fluid'>
                                <h1 className="text-start">Appointment Details</h1>
                                <div className='row'>
                                    <div className='col-md-9 '>
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead className="table-dark text-center">
                                                    <tr>
                                                        <th>SR.No</th>
                                                        <th>Doctor Name</th>
                                                        <th>Date</th>
                                                        <th>TIme</th>
                                                        <th>Cancel</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='text-center'>
                                                    {allotmentByUserID?.map((allotment, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                <p className="fw-normal mb-1">{allotment?.doctorId?.fullName}</p>
                                                            </td>
                                                            <td>
                                                                <p className="fw-normal mb-1">{new Date(allotment?.date).toLocaleDateString()}</p>
                                                            </td>
                                                            <td>{allotment?.time}</td>
                                                            <td>
                                                                <button disabled={allotment?.status !== 'approved'} className='btn btn-primary' onClick={() => handleConnectVideo(allotment?.videoCallId)}>

                                                                    Connect
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile