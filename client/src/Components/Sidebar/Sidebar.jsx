
import React from "react";
import "../../styles/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

  return (
    <div >
      <div className='card'>
        <div className='list-group list-group-flush'>
          <Link to='/' className='list-group-item list-group-item-action'> Home</Link>
          <Link to='/vdash' className='list-group-item list-group-item-action'> Dashboard</Link>
          <Link to='/venderorders' className='list-group-item list-group-item-action'> Orders</Link>
          <Link to='/venderaddorder' className='list-group-item list-group-item-action'> Add Medicine  </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
