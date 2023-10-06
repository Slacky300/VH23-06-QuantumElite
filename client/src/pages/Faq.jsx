import React from 'react'
import '../styles/faq.css'
import faq from '../images/faq.png'

const Faq = () => {
    return (
        <div>
            <section id="faqs" className="faq_wrapper mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <p className="faq_subtitle">We're here to help</p>
                            <h2 className="faq_title">Frequently asked questions</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-lg-7 mb-5 mb-lg-0">
                            <div className="accordion accordion-flush" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            1. Can I do  payment online?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, you can , we make payment easy. Easily pay via UPI,Netbaking & Card.                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            2. Can I buy a Medicines online?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, you can. TELEMEDIX is pleased to offer online car buying! Start your vehicle search right here on our Inventory page. Without ever leaving home, you can shop for your next vehicle and get pre-approved all on our site. Contact us if you are interested in a vehicle, and we'll bring it to you for a test drive.                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            3. How many Doctors are available on platform??
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            100 Plus Professional doctors </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            4. Do you offer express service?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            With help of video call system and various vendors on app
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            5. How many Vendors are available at TELEMEDIX?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            500 and counting
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <img decoding="async" src={faq} className="img-fluid hideOnMob" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq