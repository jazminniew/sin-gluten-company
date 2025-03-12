import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Images/logo.png"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
{/* Logo */}
<div className="footer-logo">
<img src={logo} alt="Sin Gluten Company" className="logo" />
</div>


        {/* Sección de ayuda */}
        <div className="footer-help">
          <h3>AYUDA</h3>
          <ul>
            <li><Link to="/about">¿Qué es SGC?</Link></li>
            <li><Link to="/faq">Preguntas Frecuentes (FAQ)</Link></li>
            <li>
  <a href="https://drive.google.com/file/d/1Be6aFQen7KhbPjB1eBBAYaBp37Pa8lFV/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
    Términos y Condiciones
  </a>
</li>

            <li><Link to="/contacto">Contáctanos</Link></li>
          </ul>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr />

      <p className="footer-rights">
        © 2024 Sin Gluten Company. Todos los derechos reservados.
      </p>
    </footer>
  );
}
