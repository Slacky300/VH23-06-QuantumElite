import React from 'react'
import '../styles/doctor.css';
import ad from '../images/aditya.jpg'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Doctors = () => {
    return (
        <div>
            <div class="container">
                <div class="row text-center">
                    <h5 className="text-center" style={{ color: '#3d86e8' }}>Our Best Suckers for your Safety</h5>
                    <h1 className="text-center">Our Fuckers</h1>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4">
                            <img src={ad} alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item"><a class="social-link"><BsFacebook /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsTwitter /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={ad} alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item"><a class="social-link"><BsFacebook /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsTwitter /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={ad} alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item"><a class="social-link"><BsFacebook /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsTwitter /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={ad} alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item"><a class="social-link"><BsFacebook /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsTwitter /></a></li>
                                <li class="list-inline-item"><a class="social-link"><BsLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctors
