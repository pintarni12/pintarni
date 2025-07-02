// src/components/Experience.js
import React from 'react';
import './Experience.css';
import pengalaman from '../assets/pengalaman.jpg'; // Ganti sesuai nama file fotonya

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-image">
          <img src={pengalaman} alt="Interior Experience" />
        </div>
        <div className="experience-text">
          <h2>Pengalaman</h2>
          <p>Saya memiliki pengalaman pernah mengikuti lomba bola voli putri antar sekolah, mewakili sekolah dalam ajang kompetisi olahraga.
          Dalam tim, saya belajar pentingnya kerja sama, disiplin waktu, dan komunikasi efektif — nilai-nilai yang saya bawa juga ke dalam pekerjaan profesional</p>
          <ul>
            <li>
              <strong>(2021 – 2022)</strong> – futsal putri
            </li>
            <li>
              <strong>(2023 – 2024)</strong> – Voli putri<br />
              Ini adalah salah satu olahraga yang saya suka
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
