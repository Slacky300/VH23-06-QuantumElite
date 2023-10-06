import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import logo from '../../images/logo.png'
import { Link } from "react-router-dom"
import '../../styles/navbar.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [color, setcolor] = useState(false)
  const user = useSelector((state) => state?.auth?.user)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
    navigate('/login')
    window.location.reload()
  }

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
                  <Link to='/doctor' style={{ textDecoration: 'none' }}>
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page">Doctor</a>
                    </li>
                  </Link>
                  <Link to='/video' style={{ textDecoration: 'none' }}>
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page">Video</a>
                    </li>
                  </Link>
                </ul>
                {user ?
                  (
                    <ul className='mt-2 text-center'>
                      <Link style={{ textDecoration: 'none' }} className="nav-item text-center">
                        <a className="nav-link learn-more-btn" aria-current="page">Dashboard</a>
                      </Link>
                      <Link onClick={handleLogout} style={{ textDecoration: 'none' }} className="nav-item text-center">
                        <a className="nav-link learn-more-btn-logout" aria-current="page" onClick={handleLogout}>Logout</a>
                      </Link>
                    </ul>)

                  : (
                    <ul className='mt-2 text-center'>
                      <Link to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                        <a className="nav-link learn-more-btn btn-extra-header" aria-current="page">Login</a>
                      </Link>
                      <Link to='/patientregister' style={{ textDecoration: 'none' }} className="nav-item text-center">
                        <a className="nav-link learn-more-btn" aria-current="page">Register</a>
                      </Link>
                    </ul>

                  )
                }

              </div>
            </div>
          </nav>
        </header>
      </>

    </>
  )
}

export default Navbar