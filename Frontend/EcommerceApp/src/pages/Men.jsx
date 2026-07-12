import React from 'react'
import menCollection from '../assets/menCollection.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Men() {

  const [menproduct, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/menproducts/")
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);
  return (
    <div>
      <section>
        <div className='sub-hero container'>
          <img className="sub-hero-image" src={menCollection} alt="Home Hero Image" />
          <div className="contents mt-5 pt-5">
            <h5 className="sub-heading text-uppercase">discover your</h5>
            <h1 className='heading fw-bold text-uppercase'>signature style</h1>
            <p className='paragraph mt-4'>Upgrade your wardrobe with premium shirts, stylish t-shirts, classic ethnic wear, and everyday essentials. Experience comfort, confidence, and modern fashion designed for every occasion with TrendHub's latest men's collection.</p>
            <a href="#men" className='btn btn-warning'>Shop Now</a>
          </div>
        </div>
      </section>

      <section id="men">
        <h4 className="text-uppercase text-center fw-bold py-5 mt-5">Modern Mens Collection</h4>
        <div className='d-flex flex-wrap justify-content-center gap-3'>
          {menproduct.map((product) => (
            <div key={product.id}>
              <div className="product-card p-2">
                <img
                  className="card-img-top"
                  src={`http://127.0.0.1:8000${product.image}`}
                  alt={product.alt}
                />
                <div className="card-body text-center px-3 pb-3">
                  <h5 className='card-title mt-3'>{product.name}</h5>
                  <p className='mt-2'>₹{product.price}</p>
                  <Link to={`/product/men/${product.id}`}>
                    <button className='btn btn-primary'>View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
