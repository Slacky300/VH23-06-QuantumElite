import React, { useEffect, useState } from 'react'
import '../../styles/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import register from '../../images/doctorLogin.png'
import axios from 'axios'
import toast from 'react-hot-toast';

// const host = process.env.REACT_APP_API_HOST

const host = 'https://telemedix-backend.onrender.com'


const Register = () => {
    const navigate = useNavigate()
    const [fullName, setfullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [pincode, setPincode] = useState('')
    const [certification, setcertification] = useState('')


    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullName.trim()) {
            toast.error('Name is required');
            return false;
        }
        if (!email.trim()) {
            if (!validateEmail(email)) {
                toast.error('Invalid Email Format');
                return false;
            }
            toast.error('Email is required');
            return false;
        }
        if (!phone.trim()) {
            toast.error('Phone Number is required');
            return false;
        }
        if (!password.trim()) {
            toast.error('Password is required');
            return false;
        }
        if (!pincode.trim()) {
            toast.error('PinCode is required');
            return false;
        }
        try {
            const res = await axios.post(`${host}/api/v1/auth/register`,
                { fullName, userType: 'doctor', email, phone, password, pincode, certification }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 200) {
                toast.success('Register Successfully')
                navigate('/login')
            }
            if (res.status == 400) {
                toast.error('Email Already Exist! Please Login')
            }
            console.log(
                fullName,
                email,
                phone,
                password,
                pincode,
                certification

            )
        } catch (err) {
            toast.error("Error While Register");
            console.log(err)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='my-5 ' >
            <div class="container d-flex justify-content-center align-items-center ">
                <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                    <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                        <div class="featured-image mb-3 animateImg">
                            <img src={register} class="img-fluid" className='m-5' />
                        </div>
                    </div>
                    <div class="col-md-6 right-box">
                        <div class="row align-items-center">
                            <div class="header-text mb-2">
                                <h2>Welcome</h2>
                                <p>Are you a <span class="badge bg-primary"><Link to='/patientregister' className='text-white' style={{ textDecoration: 'none' }}>Patient</Link></span> |  <span class="badge bg-primary"><Link to='/vendorregister' className='text-white' style={{ textDecoration: 'none' }}>Vendor</Link></span></p>
                            </div>
                            <div class="input-group d-flex flex-row align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                    <input value={fullName} type="text" onChange={(e) => setfullName(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Full Name" required />
                                </div>
                            </div>
                            <div class="input-group d-flex  align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control form-control-lg border-dark  fs-6" placeholder="Email Address" required />
                                </div>
                            </div>
                            <div class="input-group d-flex  align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                    <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control form-control-lg border-dark  fs-6" placeholder="Phone Number" required />
                                </div>
                            </div>
                            <div class="input-group d-flex flex-row align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Password" required />
                                </div>
                            </div>
                            <div class="input-group d-flex flex-row align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                    <input type="file" onChange={(e) => setcertification(e.target.files[0])} class="form-control form-control-lg border-dark fs-6" placeholder="Certifiacte" required />
                                </div>
                            </div>
                            <div class="input-group d-flex flex-row align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                    <input type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Pincode" required />
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mt-4 ">
                                <div class="form-outline flex-fill mb-0">
                                    <button class="btn btn-lg  text-white" onClick={handleSubmit} type="button" style={{ backgroundColor: '#3d86e8', width: '100%' }} >Register</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center my-3 ">
                                <div class="form-outline flex-fill mb-0 " >
                                    <Link to='/login' class="btn btn-outline-dark btn-lg btn-block" style={{ width: '100%' }} type="button">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Register
