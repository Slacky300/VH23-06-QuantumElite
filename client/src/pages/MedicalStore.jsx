import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { getAllMedicine } from "../redux/Medicine/MedicineActions";


const MedicalStore = () => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();

  const [pincode, setPincode] = useState(null);

  const fetchData = async () => {
    const lat = 19.385591;
    const lng = 72.829019;
    const apiKey = 'e06abc40ab1a2cb7d082646670f051b7'; // Replace with your actual API key

    try {
      const response = await fetch(`https://apis.mapmyindia.com/advancedmaps/v1/${apiKey}/rev_geocode?lat=${lat}&lng=${lng}`);
      const data = await response.json();
      setPincode(data.results[0].pincode);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
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
                      className="form-control"
                      type="search" placeholder="🔎 Search your medicine..."
                      onChange={(e) => setsearch(e.target.value)}
                    />
                  </div>
                  <div className="col-auto">
                    <button type="button" onClick={fetchData} className="btn btn-success">
                      Find Shops Near Me
                    </button>
                  </div>
                </div>
              </div>
              {pincode && <p>Pincode: {pincode}</p>}


              {medicines.filter((medicine) => {
                return search.toString().toLowerCase() === '' ? medicine : medicine.name.toLowerCase().includes(search)
              }).map((c) => (
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
                    <p className="my-2">Info : {c.description.slice(0, 40)}...</p>
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
