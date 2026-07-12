import React from 'react'

export default function HomeCategory({ title, desc, image, alt, location }) {

  return (
    <div>
        <div className="card img-fluid">
          <div className="text-center">
            <img className="card-img-top" src={image} className="card-img" alt="Sherwani" />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title mt-3 fs-4 text-white">{title}</h5>
              <a href={location} className='text-dark text-decoration-none text-white'>Shop Now</a>
            </div>
          </div>
      </div>
    </div>
  )
}



