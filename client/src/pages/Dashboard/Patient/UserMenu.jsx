import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    return (
        <div >
            <div className='card'>
                <div className='list-group list-group-flush'>
                    <Link to='/' className='list-group-item list-group-item-action'> Home</Link>
                    <Link to='/patient' className='list-group-item list-group-item-action'> Dashboard</Link>
                    <Link to='/patient/order' className='list-group-item list-group-item-action'> Purchase</Link>
                    <Link to='/patient/appointment' className='list-group-item list-group-item-action'> Appointment  </Link>
                    <Link to='/patient/prescription' className='list-group-item list-group-item-action'> Prescription  </Link>
                </div>
            </div>
        </div>
    )
}

export default UserMenu