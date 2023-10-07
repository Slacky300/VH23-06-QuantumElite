import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Pdetails = () => {

    const user = useSelector(state => state.auth.user)

    

    return (
        <div>
            <section >
                <div className="container">
                    <h1 className="text-start">My Profile</h1>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 150 }}
                                    />
                                    <h5 className="my-3">{user?.role === "patient"?"Patient":user?.role==="doctor"?"Doctor":"Vendor"} Details</h5>
                                    <p className="text-muted mb-1"></p>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary">EDIT PROFILE</button>

                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>

                                        <div className="col-sm-9">
                                            <input value={user?.fullName} type="email"
                                                //  onChange={(e) => setuname(e.target.value)}
                                                id="form3Example1c" className="form-control text-muted mb-0" required />
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input value={user?.email} type="email" id="form3Example1c" className="form-control text-muted mb-0" required />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input value={user?.phone}  type="email" id="form3Example1c" className="form-control text-muted mb-0" required />
                                        </div>
                                    </div>
                                    <hr />


                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input value={user?.location} type="email" id="form3Example1c" className="form-control text-muted mb-0" required />
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pdetails