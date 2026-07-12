import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-3">
            <div className="container">

              <h2 className="navbar-brand fs-4 text-uppercase fw-bold" href="index.html">Trend<span className='web-name'>Hub</span></h2>

              {/* Mobile Toggle */}
              <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Desktop Navbar */}
              <div className="d-none d-lg-flex align-items-center w-100">

                <ul className="navbar-nav mx-auto">
                  <li className="nav-item"><Link to="/" className="nav-link mx-2">Home</Link></li>
                  <li className="nav-item"><Link to="/women" className="nav-link mx-2">Women</Link></li>
                  <li className="nav-item"><Link to="/kids" className="nav-link mx-2">Kids</Link></li>
                  <li className="nav-item"><Link to="/men" className="nav-link mx-2">Men</Link></li>
                  <li className="nav-item"><Link to="/watch" className="nav-link">Watch</Link></li>
                </ul>


                <div className="user text-white">
                  <i className="fa-solid fa-user ms-5"></i><Link to="/login" className='text-white text-decoration-none'> Login / </Link>
                  <span><Link to="/register" className='text-white text-decoration-none'>Register</Link></span>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Mobile Sidebar */}
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="mobileMenu">

          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-uppercase">Trend<span className='web-name'>Hub</span></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link mx-2">Home</Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="/women" className="nav-link mx-2">Women</Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="/kids" className="nav-link mx-2">Kids</Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="/men" className="nav-link mx-2">Men</Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="/watch" className="nav-link mx-2">Watch</Link>
              </li>
            </ul>

            {/* Login / Register */}
            <div className="border-top mt-4 pt-4">
              <Link
                to="/login"
                className="btn btn-outline-light w-100 mb-3"
              >
                <i className="fa-solid fa-user me-2"></i>
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary w-100"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
