import React, { useEffect, useState } from 'react'
import UserMenu from './UserMenu'

const UserProfile = () => {

    return (
        <div className='container marginStyle'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9 '>
                        <h3 className='text-center'>Appointment Details</h3>
                        <div className='container '>
                            <div className='container-fluid'>
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

                                                    <tr>
                                                        <td>

                                                            1
                                                        </td>
                                                        <td>
                                                            <p className="fw-normal mb-1">sadadada</p>
                                                        </td>
                                                        <td>
                                                            12/12/24
                                                        </td>
                                                        <td>
                                                            10:00 AM
                                                        </td>
                                                        <td>
                                                            CANCEL BTN
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile