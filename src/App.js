import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Project';
import Header from './components/Header';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Router>
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/resume' element ={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
