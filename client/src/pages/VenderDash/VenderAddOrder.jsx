import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Stats from '../../Components/Dash/Stats'

const VenderAddOrder = () => {
    const [medicine, setMedicine] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState('')
    const [quantity, setquantity] = useState('')

    return (
        <div>
            <div className="container marginStyle">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-6">
                            <h1 className='my-3 text-center'>Add Medicine</h1>
                            <div className='mt-3'>
                                <div class="container d-flex justify-content-center align-items-center">
                                    <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                                        <div class="col-md-12 right-box">
                                            <div class="row align-items-center">
                                                <div class="input-group d-flex  align-items-center mb-3">
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input value={medicine} onChange={(e) => setMedicine(e.target.value)} type="text" class="form-control form-control-lg border-dark  fs-6" placeholder="Enter Medicine Name" required />
                                                    </div>
                                                </div>
                                                <div class="input-group d-flex  align-items-center mb-3">
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input value={description} onChange={(e) => setdescription(e.target.value)} type="text" class="form-control form-control-lg border-dark  fs-6" placeholder="Enter Medicine Description" required />
                                                    </div>
                                                </div>
                                                <div class="input-group d-flex  align-items-center mb-3">
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input value={price} onChange={(e) => setprice(e.target.value)} type="number" class="form-control form-control-lg border-dark  fs-6" placeholder="Enter Price Medicine" required />
                                                    </div>
                                                </div>
                                                <div class="input-group d-flex  align-items-center mb-3">
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input value={quantity} onChange={(e) => setquantity(e.target.value)} type="text" class="form-control form-control-lg border-dark  fs-6" placeholder="Enter Medicine Quantity" required />
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center mt-4 ">
                                                    <div class="form-outline flex-fill mb-0">
                                                        <button class="btn btn-lg  text-white" type="button" style={{ backgroundColor: '#3d86e8', width: '100%' }} >Add Medicine</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VenderAddOrder