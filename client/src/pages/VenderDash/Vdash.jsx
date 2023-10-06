import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Stats from "../../Components/Dash/Stats"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Vdash = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user)

  if (user?.role !== "vendor") {
    navigate("/");
  }

  return (
    <div className="container marginStyle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Stats />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Vdash