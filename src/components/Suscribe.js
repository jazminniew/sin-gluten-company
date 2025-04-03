import "./Suscribe.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import frontCard from "../Images/Front-card.png";
import backCard from "../Images/Back-card.png";

export default function Suscribe() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="home-container">
      <div className="text-section">
        <h3>¡Suscribite Ahora!</h3>
        <h4>Adherite a la tarjeta de beneficios y empezá a ahorrar!!</h4>
        <div className="container-button">
        <button 
          className="subscribe-btn" 
          onClick={() => window.open("https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/", "_blank")}
        >
          Suscripción mensual
        </button>

        <button 
          className="subscribe-btn" 
          onClick={() => window.open("https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/", "_blank")}
        >
          Suscripción semestral
        </button>
      </div>
      </div>

      {/* Animación al hacer scroll */}
      <motion.div
        className="flip-container"
        whileInView={{ opacity: 1, y: 0 }} // Aparece suavemente al hacer scroll
        initial={{ opacity: 0, y: 50 }} // Comienza oculto y un poco más abajo
        transition={{ duration: 1, ease: "easeOut" }} // Efecto suave
        viewport={{ once: true }} // Solo se activa una vez
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flipper">
          <img src={frontCard} alt="Imagen Frontal" className="front"/>
          <img src={backCard} alt="Imagen Trasera" className="back"/>
        </div>
      </motion.div>
    </div>
  );
}
