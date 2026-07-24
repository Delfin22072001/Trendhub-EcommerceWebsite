import React from 'react'
import { useState, useEffect } from 'react';
import kidsCollection from '../assets/kidsCollection.png'
import { Link } from 'react-router-dom';

export default function Kids() {
  const [kidsproduct, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/kidsproducts/")
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);
  return (
    <div>
      <section>
        <div className='sub-hero container'>
          <img className="sub-hero-image" src={kidsCollection} alt="Home Hero Image" />
          <div className="contents mt-5 pt-5">
            <h5 className="sub-heading text-uppercase">discover their</h5>
            <h1 className='heading fw-bold text-uppercase'>little adventures</h1>
            <p className='paragraph mt-4'>Explore playful outfits, colorful styles, and everyday essentials crafted for growing kids. Keep them comfortable, confident, and ready for every adventure with TrendHub's latest collection.</p>
            <a href="#kids" className='btn btn-warning'>Shop Now</a>
          </div>
        </div>
      </section>

      <section id="kids">
        <h4 className="text-uppercase text-center fw-bold py-5 mt-5">Cute Kids Collection</h4>
        <div className='d-flex flex-wrap justify-content-center gap-2'>
          {kidsproduct.map((product) => (
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
                  <Link to={`/product/kids/${product.id}`}>
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
