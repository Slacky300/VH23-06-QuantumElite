import React from 'react'
import "../styles/Admin.css"

const Vadmin = () => {
  return (
    <div>
        <div className="abc" >
      <div className="px-4">
        <table class="table align-middle mb-0 bg-white ">
          <thead class="bg-light">
            <tr>
              <th>Name</th>
              <th>Title</th>

              <th>Status</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
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
                <p class="fw-normal mb-1">Software engineer</p>
                <p class="text-muted mb-0">IT department</p>
              </td>
              <td>
                <span class="badge bg-danger badge-success rounded-pill d-inline">
                  NOT VERIFIED
                </span>
              </td>
              <td>Senior</td>
              <td>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Verify</button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">GSTIN VERIFICATION</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>VENDOR NAME ENTERED BY HIM</h5>
        <p>GST no.</p>

        <p>DATA COMING FROM API CALL</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >REJECT</button>
        <button type="button" class="btn btn-primary">ACCEPT</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Vadmin