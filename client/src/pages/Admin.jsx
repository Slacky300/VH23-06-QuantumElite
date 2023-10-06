import React from "react";
import "../styles/Admin.css"

const Admin = () => {
  return (
    <div className="abc" >
      <div>
        <div class="row px-5 justify-center align-item-center">
          <div class="col-md-4">
            <div class="form-outline">
              <label class="form-label" for="form12">
                Registration_number
              </label>
              <input type="text" id="form12" class="form-control" />
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-outline">
              <label class="form-label" for="form12">
                year_of_registration
              </label>
              <input type="text" id="form12" class="form-control" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-outline">
              <label class="form-label" for="form12">
                council_name
              </label>
              <input type="text" id="form12" class="form-control" />
            </div>
          </div>
          
        </div>
        <center>
          <button>VERIFY</button>
          
        </center>
      </div>

      


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
                <button type="button" class="btn btn-link btn-sm btn-rounded">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
