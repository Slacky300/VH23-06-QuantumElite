import React from 'react'
import hero from '../images/heroo.png'
import '../styles/hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <section className='banner_wrapper'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 header-img-section'>
                            <img src={hero} alt='Hello Carwale' />
                        </div>
                        <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
                            <p className="banner-subtitle">Your Safety our Priority</p>
                            <h1 className="banner-title">Help us bring <span >Women Safety</span> to Reality with us</h1>
                            <div className="learn-more-btn-section" >
                                <Link to='/emergency' style={{ backgroundColor: "red" }} className="nav-link learn-more-btn btn-header" href="#car">Emergency</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero