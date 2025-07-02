// src/components/Home.js
import React from 'react';
import './Home.css';
import pinta from '../assets/pinta.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Portofolio</h1>
        <p>Pintarni Gulo</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/ntaa_12g?utm_source=qr&igsh=MTV6eTdjYjFiajEyOA==.instagram.com/namaakunmu" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/qr/HZ2XVXT4PVA3P1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:pintarp30@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={pinta} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;
