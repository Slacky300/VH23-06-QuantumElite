import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    
    return (
        <div >
            <div className='card'>
                <div className='list-group list-group-flush'>
                    <Link to='/' className='list-group-item list-group-item-action'> Home</Link>
                    <Link to='/doctordash' className='list-group-item list-group-item-action'> Dashboard</Link>
                    <Link to='/callhistory' className='list-group-item list-group-item-action'> Call History</Link>
                    <Link to='#' className='list-group-item list-group-item-action'> Appointment  </Link>
                </div>
            </div>
        </div>
    )
}

export default UserMenu
