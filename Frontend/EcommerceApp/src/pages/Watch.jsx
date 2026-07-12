import React from 'react'
import { useState, useEffect } from 'react';
import watchCollection from '../assets/watchCollection.png'
import { Link } from 'react-router-dom';

export default function Watch() {
  const [watchproduct, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/watchproducts/")
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);
  return (
    <div>
      <section>
        <div className='sub-hero container'>
          <img className="sub-hero-image" src={watchCollection} alt="Home Hero Image" />
          <div className="contents mt-5 pt-5">
            <h5 className="sub-heading text-uppercase">discover timeless</h5>
            <h1 className='heading fw-bold text-uppercase'>precision & elegance</h1>
            <p className='paragraph mt-4'>Elevate every moment with premium timepieces crafted for style, precision, and performance. Explore classic leather watches, luxury chronographs, and modern minimalist designs that complement every occasion with TrendHub's exclusive watch collection.</p>
            <a href="#watch" className='btn btn-warning'>Shop Now</a>
          </div>
        </div>
      </section>

      <section id="watch">
        <h4 className="text-uppercase text-center fw-bold py-5 mt-5">Timeless Watch Collection</h4>
        <div className='d-flex flex-wrap justify-content-center gap-3'>
          {watchproduct.map((product) => (
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
                  <Link to={`/product/watch/${product.id}`}>
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
