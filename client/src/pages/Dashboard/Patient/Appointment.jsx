import React, { useEffect, useState } from 'react'
import UserMenu from './UserMenu'
import { GiCancel } from 'react-icons/gi'
import { getAppointMentsByUserId } from '../../../redux/Appointment/appointmentActions'
import { useDispatch, useSelector } from 'react-redux'

const UserProfile = () => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state?.auth?.user)
    const appointments = useSelector((state) => state?.appointment?.appointmentsByUserId)

    useEffect(() => {
        dispatch(getAppointMentsByUserId())
    }
        , [dispatch])


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
                                                {
                                                    appointments?.map((c) => (
                                                        <tbody className='text-center'>
                                                            <tr>
                                                                <td>

                                                                    1
                                                                </td>
                                                                <td>
                                                                    <p className="fw-normal mb-1">{c?.doctorId?.fullName}</p>
                                                                </td>
                                                                <td>
                                                                    {c?.date}
                                                                </td>
                                                                <td>
                                                                    {c?.time}
                                                                </td>
                                                                <td>
                                                                    <button disabled={!c.videoCallId} className='btn btn-primary'>Connect</button>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    ))
                                                }

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