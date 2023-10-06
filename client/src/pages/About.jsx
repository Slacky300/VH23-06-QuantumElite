import React from "react";
import "../styles/about.css";
import about2 from "../images/aboutUs.png";

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
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit
                  amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts.</p>
                <ul class="list-unstyled py-3">
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Erat volutpat aliquet imperdiet.</li>
                  <li>purus a odio finibus bibendum.</li>
                </ul>
                <button class="learn-more-btn btn-header mt-4">Learn More</button>
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
                  <h2>When a man's stomach is full it makes no
                    difference whether he is rich or poor.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                  <button class="learn-more-btn btn-header mt-3">Read More</button>
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
