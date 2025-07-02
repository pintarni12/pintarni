import React from 'react';
import './Profile.css';
import mkn1 from '../assets/mkn1.jpg'; // ✅ hanya sekali
import mkn2 from '../assets/mkn2.jpg';
import mkn3 from '../assets/mkn3.jpg'; // tambahkan jika perlu gambar ke-3

function Profile() {
  return (
    <section className="profile" id="profile">
      <h2>Profil</h2>
      <p className="description">
        Ini adalah makanan kesukaan saya.
        <br /><br />
        Sayura-sayuran, Seblak, dan Jus alpukat.
      </p>

      <div className="photo-gallery">
        <img src={mkn1} alt="Interior 1" className="polaroid" />
        <img src={mkn2} alt="Interior 2" className="polaroid" />
        <img src={mkn3} alt="Interior 3" className="polaroid" />
      </div>
    </section>
  );
}

export default Profile;
