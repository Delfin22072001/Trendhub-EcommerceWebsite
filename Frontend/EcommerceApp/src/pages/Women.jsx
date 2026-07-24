import React from 'react'
import { useState, useEffect } from 'react';
import womenCollection from '../assets/womenCollection.png'
import { Link } from 'react-router-dom';

export default function Women() {

  const [womenproduct, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/womenproducts/")
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);

  return (
    <div>
      <section>
        <div className='sub-hero container'>
          <img className="sub-hero-image" src={womenCollection} alt="Home Hero Image" />
          <div className="mt-5 pt-5">
            <h5 className="sub-heading text-uppercase">elevate your</h5>
            <h1 className='heading fw-bold text-uppercase'>everyday style</h1>
            <p className='paragraph mt-4'>Discover elegant dresses, trendy kurtis, and timeless fashion crafted for every occasion. Refresh your wardrobe with styles that blend comfort, confidence, and modern sophistication.</p>
            <a href="#women" className="btn btn-warning">Shop Now</a>
          </div>
        </div>
      </section>

      <section id="women">
        <h4 className="text-uppercase text-center fw-bold py-5 mt-5">Elegant Womens Collection</h4>
        <div className='d-flex flex-wrap justify-content-center gap-2'>
          {womenproduct.map((product) => (
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
                  <Link to={`/product/women/${product.id}`}>
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
