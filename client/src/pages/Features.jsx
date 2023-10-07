import React from "react";
import search from "../gifs/search.gif";
import puzzle from "../gifs/puzzle.gif";
import statis from "../gifs/statis.gif";
import noti from "../gifs/noti.gif";
import rock from "../gifs/features.gif";
import proct from "../gifs/proct.gif";

const Features = () => {
  return (
    <>
      <section id="services" class="services_wrapper mb-5">
        <div class="container">
          <h5 className="text-center" style={{ color: '#3d86e8' }}>Best Features for your Safety</h5>
          <h1 className="text-center">Features</h1>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <div class="bg-transparent border-0">
                <div class="card-body text-md-end">
                  <h3>Video Call<span style={{ color: '#3d86e8' }}> 01 </span></h3>
                  <p>Doctor can easily connect with patients from anywhere and anytime</p>
                  <h3>Online Medical Store<span style={{ color: '#3d86e8' }}> 02 </span></h3>
                  <p>Vendors get a platform to sell there medicines and other drugs</p>
                  <h3>FirstAid Guide <span style={{ color: '#3d86e8' }}>03 </span></h3>
                  <p>TeleMedix has a separate page dedicated towards FirstAid to educate People and make awareness among people</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <div class=" bg-transparent border-0">
                <div class="card-body text-center">
                  <img src={rock} class="img-fluid mb-4 service_phone" />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <div class=" bg-transparent border-0">
                <div class="card-body text-start">
                  <h3><span style={{ color: '#3d86e8' }}>04 </span>Verified Doctors</h3>
                  <p>Doctors need to provide valid certificate proof which will be checked and then doctor gets sccess</p>
                  <h3><span style={{ color: '#3d86e8' }}>05 </span>Verified Vendors</h3>
                  <p>Vendors need to verify there GSTIN to be eligible to list there shop on website</p>
                  <h3><span style={{ color: '#3d86e8' }}>06 </span>AI Chat Assistant</h3>
                  <p>An AI Chat Assistant always at your service 24/7 incase doctor is busy or patients have any queries regarding anything</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
