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
            <li><Link to="/que-es-sgc">¿Qué es SGC?</Link></li>
            <li><Link to="/faq">Preguntas Frecuentes (FAQ)</Link></li>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
            <li><Link to="/contacto">Contáctanos</Link></li>
          </ul>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr />

      {/* Derechos reservados */}
      <p className="footer-rights">
        © 2024 Sin Gluten Company. Todos los derechos reservados.
      </p>
    </footer>
  );
}
