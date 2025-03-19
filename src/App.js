import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from "./pages/Category"; // Corregido
import AdhereTo from './pages/AdhereTo';
import Faq from './pages/Faq'; 
import ContactUs from './pages/ContactUs'; 
import About from './pages/About';

import ScrollToTop from "./components/ScrollToTop"; 

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/faq" element={<Faq />} /> 
          <Route path="/category/:category" element={<Category />} />
          <Route path="/adherir" element={<AdhereTo />} />
          <Route path="/AdhereTo" element={<AdhereTo />} />
          <Route path="/contacto" element={<ContactUs />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
