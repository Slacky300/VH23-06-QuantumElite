import React from "react";
import "../styles/about.css";
import about2 from "../images/aboutUs.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section id="about" className="mt-5">
        <div class="about-section wrapper mt-5">
          <h5 className="text-center" style={{ color: '#3d86e8' }}>Our Team for your Safety</h5>
          <h1 className="text-center">About Us</h1>
          <div class="container food-type">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-12">
                <img src={about2} class="img-fluid" />
              </div>
              <div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5 mt-2">
                <h2>We take everything Seriously with the best possible Health Services.</h2>
                <p>TeleMedix is the doctor and patient online consultant app where patient can interact with the doctor to get advice instead of travelling long distance. Also, we have a medical store for patient with home delivery of medicine ~ future update. Our team are with you 24/7 to provide best and secure doctor consulting.</p>
                <ul class="list-unstyled py-3">
                  <li>One-to-one Video call</li>
                  <li>Online Prescription</li>
                  <li>Online Medical Store</li>
                  <li>AI Chat Assistant 24/7 and more ...</li>
                </ul>
                <Link to='/doctor' className="nav-link learn-more-btn btn-header" >Make Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story">
        <div class="story-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="text-content">
                  <h2>Explore Our Professional Doctors</h2>
                  <p>Professional and Exprienced Doctors with high level skills in their respective Domains. Best of Best !</p>
                  <Link to='/doctor' className="nav-link learn-more-btn btn-header my-2" >View Doctors</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
