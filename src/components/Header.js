import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../Images/logo.png"; 
import BtnSolicita from './BtnSolicita';  // Importa el nuevo botón
import SocialMedia from './SocialMedia'; // Importa el componente


export default function Header() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Adherí tu Comercio', route: '/adherir-comercio' },
    { label: 'Viandas/Comidas Congeladas', route: '/viandas' },
    { label: 'Restaurantes/Cafeterías', route: '/restaurantes' },
    { label: 'Panaderías/Pastelerías/Chocolaterías', route: '/panaderias' },
    { label: 'Envíos a todo el país', route: '/envios' },
    { label: 'Pizza/Empanadas/Pastas', route: '/pizzas' },
    { label: 'Almacenes/Dietéticas/Distribuidoras', route: '/almacenes' },
    { label: 'Heladerías', route: '/heladerias' },
    { label: 'POR EL MUNDO', route: '/mundo' },
    { label: 'Hotelería', route: '/hoteleria' }
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

      {/* Redes sociales
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
       */}

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

      {/* Menú móvil */}
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
        <DialogPanel className="fixed inset-0 bg-white p-6 z-50 overflow-y-auto rounded-3xl">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="logo">
              <img 
                src={logo} 
                alt="Sin Gluten Company" 
                style={{ 
                  width: "60px", 
                  borderRadius: "12px", 
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
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
            {/* Sección de Acciones */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 shadow-sm">
              <div className="space-y-3">
                <Link 
                  to="/adherir-comercio"
                  className="block bg-white border border-gray-200 text-gray-800 text-base py-3 px-4 rounded-lg hover:bg-gray-100 transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Adherí tu Comercio
                </Link>
                <Link 
                  to="/solicitar-tarjeta"
                  className="block text-blue-600 text-base text-center font-semibold hover:text-blue-800 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar Tarjeta
                </Link>
              </div>
            </div>

            {/* Sección de Categorías */}
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


    </header>
  );
}
