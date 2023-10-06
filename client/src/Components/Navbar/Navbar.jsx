import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import logo from '../../images/logo.png'
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import '../../styles/navbar.css'
import { useAuth } from '../../context/auth'

const Navbar = () => {

    const [auth, setAuth] = useAuth();

    const handleSubmit = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
        toast.success('Logged Out Successfully')
    }

    const [color, setcolor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    useEffect(() => {
        const navBar = document.querySelectorAll(".nav-link");
        const navCollapse = document.querySelector(".navbar-collapse.collapse");

        const handleNavClick = () => {
            navCollapse.classList.remove("show");
        };

        navBar.forEach((a) => {
            a.addEventListener("click", handleNavClick);
        });

        return () => {
            navBar.forEach((a) => {
                a.removeEventListener("click", handleNavClick);
            });
        };
    }, []);

    return (
        <>
            <header className={color ? 'header_wrapper header-scrolled' : 'header_wrapper'}>
                        <nav className="navbar navbar-expand-lg fixed-top">
                            <div className="container-fluid mx-3">
                                <Link to='/'>
                                    <img src={logo} style={{ width: '130px' }} />
                                </Link>
                                <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <BiMenuAltRight size={35} />
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav menu-navbar-nav">
                                        <Link to='/' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <a className="nav-link " aria-current="page">Home</a>
                                            </li>
                                        </Link>
                                        <Link to='/about' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <a className="nav-link " aria-current="page">Medicines</a>
                                            </li>
                                        </Link>
                                        <Link to='/doctor' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <a className="nav-link " aria-current="page">Doctor</a>
                                            </li>
                                        </Link>
                                        <Link to='/admin' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <a className="nav-link " aria-current="page">Doctor Admin</a>
                                            </li>
                                        </Link>
                                        <Link to='/vadmin' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <a className="nav-link " aria-current="page">Vendor Admin</a>
                                            </li>
                                        </Link>
                                        <Link to='/patient' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <a className="nav-link " aria-current="page">Profile</a>
                                            </li>
                                        </Link>
                                    </ul>

                                    {!auth.user ? (<ul className='mt-2 text-center'>
                                        <Link to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <a className="nav-link learn-more-btn btn-extra-header" aria-current="page">Login</a>
                                        </Link>
                                        <Link to='/patientregister' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <a className="nav-link learn-more-btn" aria-current="page">Register</a>
                                        </Link>
                                    </ul>) : (<ul className='mt-2 text-center'>
                                        <Link to={`/dashboard${auth?.user?.role === 1 ? "/" : "/profile"}`} style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <a className="nav-link learn-more-btn" aria-current="page">Dashboard</a>
                                        </Link>
                                        <Link onClick={handleSubmit} to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <a className="nav-link learn-more-btn-logout" aria-current="page">Logout</a>
                                        </Link>
                                    </ul>)
                                    }
                                </div>
                            </div>
                        </nav>
                    </header>
        </>
    )
}

export default Navbar