import React from 'react'
import { Link } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div >
      <div className='card'>
        <div className='list-group list-group-flush'>
          <Link to='/' className='list-group-item list-group-item-action'> Home</Link>
          <Link to='/vdash' className='list-group-item list-group-item-action'> Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default Siderbar
