import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer mt-5 bg-light px-3">
          <div className="container p-3">
            <div className="row">
              <div className="col-md-3 col-sm-12 px-2">
                <h5 className="fw-bold mt-3 mb-3">Quick Links</h5>
                <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
                <li><Link to="/women" className="text-decoration-none text-dark">Women</Link></li>
                <li><Link to="/kids" className="text-decoration-none text-dark">Kids</Link></li>
                <li><Link to="/men" className="text-decoration-none text-dark">Men</Link></li>
                <li><Link to="/watch" className="text-decoration-none text-dark">Men</Link></li>
              </div>
              <div className="col-md-3 ps-2">
                <h5 className="fw-bold mt-3 mb-3">Contact</h5>
                <li>support@trendhub.com</li>
              </div>
              <div className="col-md-3 ps-2">
                <h5 className="fw-bold mt-3 mb-3">Address</h5>
                <li>Chennai, TamilNadu</li>
              </div>
              <div className="col-md-3">
                <h5 className="fw-bold mt-3 mb-3">Keep in Touch</h5>
                <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://x.com/"><i className="fa-brands fa-x-twitter mx-2"></i></a>
                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
              </div>
              <div className="w-100 text-center">
                <p className="mt-3">&copy;
                  2026 TrendHub. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
