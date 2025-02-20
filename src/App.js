import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import AdhereTo from './pages/AdhereTo';
import Faq from './pages/Faq'; 
import ScrollToTop from "./components/ScrollToTop"; 

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      <main>
        <Routes>
        
          <Route path="/" element={<Home />} /> {/* 👈 Asegúrate de que la home sea correcta */}
          <Route path="/faq" element={<Faq />} /> {/* 👈 Ahora está bien escrito */}
          <Route path="/category" element={<Category />} /> 
          <Route path="/adherir" element={<AdhereTo />} />
          <Route path="/AdhereTo" element={<AdhereTo />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
