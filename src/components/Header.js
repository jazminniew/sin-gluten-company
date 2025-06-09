import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../Images/logo.png"; 
import BtnSolicita from './BtnSolicita';  
import SocialMedia from './SocialMedia';

export default function Header() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Adherí tu Comercio', route: '/adherir-comercio' },
    { label: 'Viandas/Comidas Congeladas', route: '/category/viandas-comidas-congeladas' },
    { label: 'Restaurantes/Cafeterías', route: '/category/restaurantes-cafeterias' },
    { label: 'Panaderías/Pastelerías/Chocolaterías', route: '/category/panaderias-pastelerias-chocolaterias' },
    { label: 'Envíos a todo el país', route: '/category/envios-a-todo-el-pais' },
    { label: 'Pizza/Empanadas/Pastas', route: '/category/pizza-empanadas-pastas' },
    { label: 'Almacenes/Dietéticas/Distribuidoras', route: '/category/almacenes-dieteticas-distribuidoras' },
    { label: 'Heladerías', route: '/category/heladerias' },
    { label: 'POR EL MUNDO', route: '/category/por-el-mundo' },
    { label: 'Catering-Hotelería', route: '/category/catering-hoteleria' },

  ];  

  return (
    <header>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="logo">
          <img src={logo} alt="Sin Gluten Company" className="logo" />
        </Link>
        <span className="company-name">SIN GLUTEN <span>COMPANY</span></span>
      </div>

<div className="hidden lg:flex items-center gap-4">
  <SocialMedia />
</div>

      {/* Botones */}
      <div className="container-button">
        <Link to="/adherir">
          <button className="atc-button">Adherí tu Comercio</button>
        </Link>

        {/* Botón de UIVERSE reemplazando el anterior */}
        <a href="https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/" target="_blank" rel="noopener noreferrer">
          <BtnSolicita />
        </a>
      </div>
 {/*
 
      <div className="lg:hidden">
        <button onClick={() => setMobileMenuOpen(true)} className="text-gray-700" aria-label="Abrir menú móvil">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      
      <Dialog 
        open={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onKeyDown={(e) => e.key === 'Escape' && setMobileMenuOpen(false)} 
        className="lg:hidden"
      >

          Botón primario: Solicitar Tarjeta (ahora arriba)
      <DialogPanel className="fixed inset-0 bg-white p-6 z-50 overflow-y-auto rounded-3xl">
  <div className="flex justify-between items-center mb-8">
    <Link to="/" className="logo">
      <img
        src={logo}
        alt="Sin Gluten Company"
        style={{
          width: "80px",
          height: "80px", // Aumenté el ancho para que sea más visible
          borderRadius: "12px",
        }}
      />
    </Link>
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="text-gray-700 hover:bg-gray-100 p-2 rounded-full transition"
      aria-label="Cerrar menú móvil"
    >
      <XMarkIcon className="h-6 w-6" />
    </button>
  </div>

  <div className="space-y-4">

    <div className="bg-gray-50 rounded-xl p-4 mb-6 shadow-sm">
      <div className="space-y-3">

        <a
          href="https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <button
            className="w-full"
            style={{
              padding: "12px 16px",
              backgroundColor: "#00aaba",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 600,
              borderRadius: "999px",
              transition: "background-color 0.3s",
            }}
          >
            Solicitar Tarjeta
          </button>
        </a>

        <Link to="/adherir" onClick={() => setMobileMenuOpen(false)}>
          <button
            className="w-full"
            style={{
              padding: "12px 16px",
              backgroundColor: "transparent",
              color: "rgb(133, 133, 133)",
              fontSize: "0.9rem",
              fontWeight: 600,
              borderRadius: "999px",
              transition: "background-color 0.3s",
            }}
          >
            Adherí tu Comercio
          </button>
        </Link>
      </div>
    </div>

    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-700 px-4">Categorías</h2>
      {menuItems.slice(1).map((item, index) => (
        <Link
          key={index}
          to={item.route}
          className="block text-gray-600 text-base py-3 px-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition"
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
</DialogPanel>

      </Dialog>
      */}
    </header>
  );
}



