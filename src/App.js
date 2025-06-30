import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Experience from './pages/Experience';


function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">Tentang Saya</Link>
        <Link to="/portfolio">Portofolio</Link>
        <Link to="/contact">Kontak</Link>
        <Link to="/experience">Pengalaman</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
