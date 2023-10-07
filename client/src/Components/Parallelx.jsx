import React from 'react'
import '../styles/parallelx.css'
import { Link } from 'react-router-dom'

const Parallelx = () => {
    return (
        <div>
            <section class="more-info-section bg-color">
                <section class="container ">
                    <div class="row">
                        <div class="col-xl-6 xol-lg-6 col-md-12 col-12  d-flex flex-column justify-content-center align-items-start ">
                            <h1 class="common-heading text-capitalize fw-bolder text-white">
                                Telehealth connect platform for doctors,patients and vendors ...
                            </h1>
                            <p class="mt-3 mb-5 para-width text-white" style={{ textAlign: 'justify' }}>
                                Doctor Consulting for everyone and anywhere !
                            </p>
                            <Link to='/ai' class="btn learn-more-btn">Contact Us</Link>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Parallelx
