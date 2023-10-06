import React, { useEffect, useState } from 'react'
import "../styles/Admin.css"
import axios from "axios";

const Vadmin = () => {
  const [gstInData, setGstInData] = useState('')
  const checkGSTIN = async () => {
    const options = {
      method: 'POST',
      url: 'https://gst-verification.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_gst_certificate',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0720086d43msh946ebfa085a2a8bp1297aejsncd8140a193e1',
        'X-RapidAPI-Host': 'gst-verification.p.rapidapi.com'
      },
      data: {
        task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
        group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
        data: {
          gstin: ''
        }
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.action);
      setGstInData(response.data)
    } catch (error) {
      console.error(error);
    }
  }


  const handleVerify = () => {
    // checkGSTIN()
  }


  // 
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
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleVerify}>Verify</button>

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
              {
                gstInData ? (
                  <>
                    <p className='mt-5'>TRADE NAME: {gstInData.result.source_output.trade_name}</p>
                    <p>Place:{gstInData.result.source_output.principal_place_of_business_fields.principal_place_of_business_address.door_number}</p>
                    <p>City:{gstInData.result.source_output.principal_place_of_business_fields.principal_place_of_business_address.city || ''}</p>
                    <p>Location:{gstInData.result.source_output.principal_place_of_business_fields.principal_place_of_business_address.location || ''}</p>
                    <p>State Name{gstInData.result.source_output.principal_place_of_business_fields.principal_place_of_business_address.state_name || ''}</p>
                    <p>Pincode:{gstInData.result.source_output.principal_place_of_business_fields.principal_place_of_business_address.pincode || ''}</p>


                  </>
                ) : <p>NO DATA AVAILABLE</p>
              }
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