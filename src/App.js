// src/App.js
import React from 'react';
import Home from './components/Home';     // pastikan path ini benar
import Profile from './components/Profile';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Home />
      <Profile />
      <Experience />
    </div>
  );
}

export default App; // WAJIB ADA untuk bisa di-import oleh index.js
