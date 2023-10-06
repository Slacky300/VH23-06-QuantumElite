import React from 'react'
import UserMenu from "./UserMenu";
import Pdetails from "../Patient/Pdetails";
import Appointments from '../../../Components/Dash/Appointments'

const DocDash = () => {
  return (
    <div className="container marginStyle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <Pdetails />
            <Appointments />



          </div>
        </div>
      </div>
    </div>
  )
}

export default DocDash