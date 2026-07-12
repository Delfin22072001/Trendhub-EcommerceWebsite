import React from 'react'
import homePage from '../assets/homePage.jpg'
import menImage from '../assets/men.jpg'
import kidsImage from '../assets/kids.jpg'
import womenImage from '../assets/women.jpg'
import womenCategory from '../assets/sherwani-trend.jpg'
import menCategory from '../assets/shirt-trend.webp'
import kidsCategory from '../assets/gown-trend.jpg'
import HomeCategory from '../components/HomeCategory'
import watchCategory from '../assets/watch-trend.jpg'
import { useEffect, useState } from "react";
import watch from '../assets/watch.jpg'
import { Link } from 'react-router-dom'


export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);


  const category = [
    { title: "Womens Collection", image: womenCategory, alt: "Womens Collection", location: "/women" },
    { title: "Kids Collection", image: kidsCategory, alt: "Kids Collection", location: "/kids" },
    { title: "Mens Collection", image: menCategory, alt: "Mens Collection", location: "/men" },
    { title: "Watch Collections", image: watchCategory, alt: "Mens Collection", location: "/watch" },

  ]
  return (
    <div>
      <section>
        <div className='hero container'>
          <img className="hero-image" src={homePage} alt="Home Hero Image" />
          <div className="mt-5 pt-5">
            <h6 className='sub-heading text-uppercase'>stay ahead. shop the latest.</h6>
            <h1 className="main-heading fw-bold text-uppercase">style that speaks you</h1>
            <p className='paragraph my-4'>Stay ahead with the hottest trends and must-have products curated just for you.
              Fashion, tech, lifestyle, and more — all in one seamless shopping destination.</p>
            <div>
              <a href="#tredy-items" className='btn btn-outline-success text-uppercase'>view trendy collections</a>
            </div>
            <div className='home-profiles mt-5'>
              <img src={womenImage} alt="Women Image" />
              <img className="mx-3" src={kidsImage} alt="Kids Image" />
              <img src={menImage} alt="Men Image" />
              <img className="mx-3" src={watch} alt="Watch Image" />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light'>
        <div className='our-services container d-flex justify-content-around align-items-center py-3 gap-5'>
          <div className='text-center'>
            <i className="fa-regular fa-truck mx-3"></i>
            <span>Free Shipping</span>
          </div>
          <div className='text-center'>
            <i className="fa-solid fa-medal mx-3"></i>
            <span className='text-center'>Best Quality</span>
          </div>
          <div className='text-center'>
            <i className="fa-solid fa-rotate-left mx-3"></i>
            <span>Easy Returns</span>
          </div>
          <div className='text-center'>
            <i className="fa-regular fa-headphones mx-3"></i>
            <span>24/7 support</span>
          </div>
        </div>
      </section>


      {/* choose by category */}
      <section>
        <div>
          <h3 className="text-uppercase text-center fw-bold p-5 mt-3">shop by category</h3>
          <div className='d-flex flex-wrap justify-content-center align-items-center gap-3'>
            {category.map((product, index) => (
              <HomeCategory key={index} {...product} />
            ))}
          </div>
        </div>
      </section>


      <section id="tredy-items">
        <h3 className="text-uppercase text-center fw-bold py-5 mt-5">our trendy collections</h3>
        <div className='d-flex flex-wrap justify-content-center gap-3'>
          {products.map((product) => (
            <div key={product.id}>
              <div className="product-card p-3">
                <img
                  className="card-img-top"
                  src={`http://127.0.0.1:8000/${product.image}`}
                  alt={product.alt}
                />
                <div className="card-body text-center pt-3">
                  <h5 className='card-title'>{product.name}</h5>
                  <p className='mt-2'>₹{product.price}</p>
                  <Link to={`/product/trendy/${product.id}`}>
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

