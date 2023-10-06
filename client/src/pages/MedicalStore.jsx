import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';


const MedicalStore = () => {
  const [pincode, setPincode] = useState(null);

  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");

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


  // const handleSubmit = async (e) => {
  //   try {
  //     console.log(lat);
  //     console.log(long);
  //     const payload = {
  //       // userId: auth?.user._id,
  //       lat,
  //       long,
  //     };
  //     console.log(payload);

  //     // https://apis.mapmyindia.com/advancedmaps/v1/e06abc40ab1a2cb7d082646670f051b7/rev_geocode?lat=19.385591&lng=72.829019

  //     const res = await fetch(
  //       "https://womensecbackend.onrender.com/api/v1/emergency/emergencypressed",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(payload),
  //         headers: { "Content-type": "application/json" },
  //       }
  //     );
  //     if (res.status === 200) {
  //       toast.success("Search SUCCESSFULL");
  //     } else {
  //       toast.error("Search Failed");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     toast.error("Something went wrong");
  //   }
  // };
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

  return (
    <div>
      <div>
        <div className="marginStyle">
          <div className="container">
            <div className="row text-center">
              <h5 className="text-center" style={{ color: "#3d86e8" }}>
                Tele-Medical
              </h5>
              <h1 className="text-center mb-5">Medical Store</h1>
              
              
      {pincode && <p>Pincode: {pincode}</p>}

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
                    <button type="button" onClick={fetchData}  className="btn btn-success">
                      Find Shops Near Me
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mt-5">
                <div className="bg-white py-5 px-4 cardStyle">
                  <img
                    // onClick={() => handleFetchDoctorByID(c?.doctorId)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    src="https://www.ankurahospitals.com/wp-content/uploads/2021/03/our-doctor-placeholder.jpg"
                    alt=""
                    width="100"
                    className="mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Meet</h5>
                  <h6 className="small text-uppercase text-muted my-3">T.B</h6>
                  <button
                    className="btn text-white"
                    // onClick={() => {
                    //     setDoctorID(c.doctorId)
                    // }}
                    style={{ backgroundColor: "#3d86e8" }}
                  >
                    Buy Medicine
                  </button>
                </div>
              </div>
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
