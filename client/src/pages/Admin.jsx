import React, { useState } from "react";
import "../styles/Admin.css"
import axios from "axios";
import toast from "react-hot-toast";

const Admin = () => {
  const [FormData, setFormData] = useState({
    registration_number: "",
    year_of_registration: "",
    council_name: ""
  })

  const checkRequestId = async (requestID) => {
    const options = {
      method: 'GET',
      url: 'https://mci-nmc-doctor-verification.p.rapidapi.com/v3/tasks',
      params: {
        request_id: requestID
      },
      headers: {
        'X-RapidAPI-Key': '0720086d43msh946ebfa085a2a8bp1297aejsncd8140a193e1',
        'X-RapidAPI-Host': 'mci-nmc-doctor-verification.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data[0].status);
      if (response.data[0].status === 'failed') {
        toast.error('Certificate Invalid')
      } else {
        toast.success('Certificate Valid')
      }
    } catch (error) {
      console.error(error);
    }
  }

  const checkValidationOfCertification = async () => {
    const options = {
      method: 'POST',
      url: 'https://mci-nmc-doctor-verification.p.rapidapi.com/v3/tasks/async/verify_with_source/nmc_doctor',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0720086d43msh946ebfa085a2a8bp1297aejsncd8140a193e1',
        'X-RapidAPI-Host': 'mci-nmc-doctor-verification.p.rapidapi.com'
      },
      data: {
        task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
        group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
        data: {
          registration_no: FormData.registration_number,
          year_of_registration: FormData.year_of_registration,
          council_name: FormData.council_name
        }
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      await checkRequestId(response.data.request_id)
    } catch (error) {
      console.error(error);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(FormData)
    checkValidationOfCertification()
  }

  const onChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }


  return (
    <div className="abc" >
      <div>

        <div class="row px-5 justify-center align-item-center">
          <form onSubmit={handleSubmit}>
            <div class="col-md-4">
              <div class="form-outline">
                <label class="form-label" for="form12">
                  Registration_number
                </label>
                <input type="text" id="form12" value={FormData.registration_number} class="form-control" name="registration_number" onChange={onChange} />
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-outline">
                <label class="form-label" for="form12">
                  year_of_registration
                </label>
                <input type="text" value={FormData.year_of_registration} id="form12" class="form-control" name="year_of_registration" onChange={onChange} />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-outline">
                <label class="form-label" for="form12">
                  council_name
                </label>
                <input type="text" id="form12" value={FormData.council_name} class="form-control" name="council_name" onChange={onChange} />

              </div>
              <button className="btn btn-primary my-2" type="submit">VERIFY</button>
            </div>
          </form>

        </div>
        <center>


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
