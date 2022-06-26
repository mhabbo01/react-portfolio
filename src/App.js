import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Project';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
