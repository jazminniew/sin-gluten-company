import "./Suscribe.css";
import React, { useState } from "react";
import frontCard from "../Images/Front-card.png";
import backCard from "../Images/Back-card.png";


export default function Suscribe() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="home-container">
      <div className="text-section">
        <h3>¡Suscribite Ahora!</h3>
        <h4>Adherite a la tarjeta de beneficios y empezá a ahorrar!!</h4>
        <button className="subscribe-btn">Suscribirme</button>
      </div>
      <div className="flip-container" onClick={() => setFlipped(!flipped)}>
        <div className={`flipper ${flipped ? "flipped" : ""}`}>
          <img src={frontCard} alt="Imagen Frontal" className="front"/>
          <img src={backCard} alt="Imagen Trasera" className="back"/>
        </div>
      </div>
    </div>
  );
}
