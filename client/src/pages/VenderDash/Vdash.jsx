import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Stats from "../../Components/Dash/Stats"

const Vdash = () => {
  return (
    <div >
      <div className="row">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-9">
          <h1><Stats/></h1>
        </div>
      </div>
    </div>
  )
}
export default Vdash