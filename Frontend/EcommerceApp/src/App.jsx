import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Watch from './pages/Watch';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login'
import Register from './pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/men" element={<Men />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/product/:category/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
