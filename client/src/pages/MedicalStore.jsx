import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { getAllMedicine } from "../redux/Medicine/MedicineActions";


const MedicalStore = () => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    try {
      console.log(lat);
      console.log(long);
      const payload = {
        // userId: auth?.user._id,
        lat,
        long,
      };
      console.log(payload);
      const res = await fetch(
        "https://womensecbackend.onrender.com/api/v1/emergency/emergencypressed",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-type": "application/json" },
        }
      );
      if (res.status === 200) {
        toast.success("SOS SENT SUCCESSFULLY");
      } else {
        toast.error("SOS FAILED");
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => getLocation(), []);

  const showPosition = async (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLat(latitude);
    setLong(longitude);

    // handleSubmit();
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    console.log("useEffect");
    dispatch(getAllMedicine())

  }, [])
  const medicines = useSelector((state) => state?.medicine?.medicines)
  console.log(medicines);
  return (
    <div>
      <div>
        <div className="marginStyle">
          <div className="container">
            <div className="row text-center">
              <h5 className="text-center" style={{ color: "#3d86e8" }}>
                Our Medical for your Safety
              </h5>
              <h1 className="text-center mb-5">Medical Store</h1>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                  <div className="col-auto">
                    <button type="button" onClick={handleSubmit} className="btn btn-success">
                      Find Shops Near Me
                    </button>
                  </div>
                </div>
              </div>

              {medicines.map((c) => (
                <div className="col-xl-3 col-sm-6 mt-5">
                  <div className="bg-white py-5 px-4 cardStyle">
                    <img
                      style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      src={c.medImg}
                      alt={c.name}
                      className="mb-3"
                    />
                    <h5 className="mb-0">{c.name}</h5>
                    <p className="mb-0">{c.description.slice(0, 9)}</p>
                    <div className="d-flex justify-content-between my-3">
                      <h6 className='respBrand'>Stock : {c.quantity}</h6>
                      <h6 className='respBrand'>Price : ₹ {c.price} </h6>
                    </div>
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#3d86e8" }}
                    >
                      Buy Medicine
                    </button>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered mt-3">
            <div className="modal-content">
              <div className="container d-flex justify-content-center align-items-center ">
                <div className="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                  <div className="row align-items-center my-3">
                    <div className="header-text mb-4">
                      <h5>Dr. Meet Description:</h5>
                    </div>
                    <p>
                      Medicine Name: <span>Meet007</span>
                    </p>
                    <p>
                      description: <span>lorem007</span>
                    </p>
                    <p>
                      price: <span>Rs 100</span>
                    </p>
                    <p>
                      quantity: <span>10</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalStore;
