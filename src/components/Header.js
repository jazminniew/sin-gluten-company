'use client'

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../Images/logo.png"; 

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="logo">
        <img src={logo} alt="Sin Gluten Company" className="logo" />
        </Link>
        <span className="company-name">SIN GLUTEN <span>COMPANY</span></span>
      </div>

      {/* Redes sociales */}
      <div className="social-icons hidden lg:flex items-center gap-4">
      <a href="https://www.tiktok.com/@sin.gluten.compan?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <ion-icon name="logo-tiktok"></ion-icon>
      </a>
      <a href="https://www.instagram.com/singlutencompany?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61566532809356" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
      </div>

      {/* Botones */}
      <div className="container-button">
      <Link to="/adherir">
        <button className="atc-button">Adherí tu Comercio</button>
      </Link>
      
      <a href="https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/" target="_blank" rel="noopener noreferrer">
  <button className="cta-button">Solicitá tu tarjeta</button>
</a>

    </div>

      {/* Menú móvil (TERMINAR)*/}
      <div className="lg:hidden">
        <button onClick={() => setMobileMenuOpen(true)} className="text-gray-700" aria-label="Abrir menú móvil">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onKeyDown={(e) => e.key === 'Escape' && setMobileMenuOpen(false)} className="lg:hidden">
        <DialogPanel className="fixed inset-0 bg-white p-6 z-50">
          <div className="flex justify-between items-center">
            <Link to="/" className="logo">
            <img src={logo} alt="Sin Gluten Company" style={{ width: "60px" }} />

            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700" aria-label="Cerrar menú móvil">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4 text-center">
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Adherí tu Comercio</a>
            <button className="cta-button w-full">Solicitá tu tarjeta</button>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Viandas/Comidas Congeladas</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Restaurantes/Cafeterías</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Panaderías/Pastelerías/Chocolaterías</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Envíos a todo el pais</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Pizza/Empanadas/Pastas</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Almacenes/Dietéticas/Distribuidoras</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Heladerías</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">POR EL MUNDO</a>
            <a href="#" className="text-gray-500 text-lg hover:text-gray-700">Hotelería</a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
