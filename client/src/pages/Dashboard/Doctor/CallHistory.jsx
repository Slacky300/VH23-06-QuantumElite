import React from 'react'
import "../../../styles/Admin.css"
import UserMenu from './UserMenu'

const CallHistory = () => {
  return (
    <div className='abc'>
        <div >
        <div className="container marginStyle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
          <div className="px-4">
          <table class="table align-middle mb-0 bg-white ">
            <thead class="bg-light" >
              <tr>
                <th>Name</th>
                <th>Date</th>
                
                <th>Time</th>
              
                
                <th>Prescription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      class="rounded-circle"
                    />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">John Doe</p>
                      <p class="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">12/10/22</p>
                </td>
                <td>
                  <p class="fw-normal mb-1">5 PM</p>
                </td>
               
                
                
                <td>
                  <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"> SEND PRESCRIPTION</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
        <h5>Patient Details: </h5>
        <p className="mt-5">Patient name:</p>
        <p className="mt-5">Problem:</p>

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

export default CallHistory