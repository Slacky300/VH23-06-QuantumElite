import React, { useEffect, useState } from 'react'
import UserMenu from './UserMenu'
import { GiCancel } from 'react-icons/gi'
import { getAppointMentsByUserId } from '../../../redux/Appointment/appointmentActions'
import { getAssignedPrescriptionsAction } from '../../../redux/prescription/prescriptionAction'
import { useDispatch, useSelector } from 'react-redux'

const Prescription = () => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state?.auth?.user)
    const prescription = useSelector((state) => state?.prescription?.prescription)
    const userid=user?.id;

    useEffect(() => {
        dispatch(getAppointMentsByUserId(user?._id))
    dispatch(getAssignedPrescriptionsAction(user?._id))
    console.log(prescription)
    }
        , [dispatch,user])


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
                                <h1 className="text-start">Prescription Details</h1>
                                <div className='row'>
                                    <div className='col-md-9 '>
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead className="table-dark text-center">
                                                    <tr>
                                                        <th>SR.No</th>
                                                        <th>Doctor Name</th>
                                                        <th>presciption</th>
                                                    </tr>
                                                </thead>
                                                {
                                                    prescription?.map((c,_) => (
                                                        <tbody className='text-center'>
                                                            <tr>
                                                                <td>

                                                                    {_ + 1}
                                                                </td>
                                                                <td>
                                                                    <p className="fw-normal mb-1">{c?.doctorId?.fullName}</p>
                                                                </td>
                                                                <td>
                                                                    {c?.doctor.fullName}
                                                                </td>
                                                                <td>
                                                                    {c?.prescImg}
                                                                </td>
                                                                
                                                                
                                                                

                                            
                                                                <td>
                                                                    <button  className='btn btn-primary'>VIEW</button>
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

export default Prescription