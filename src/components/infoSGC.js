import React from "react";
import "./infoSGC.css";
import userIcon from "../Images/user.png";
import glutenFreeIcon from "../Images/glutenFreeIcon.png";
import moneyIcon from "../Images/money.png";
import healthIcon from "../Images/health.png";

const InfoSGC = () => {
  return (
    <div className="info-container"> 
          <div className="info-text">
        <h2>¿Qué es <span>Sin Gluten Company</span>?</h2>
        <p>
          Sin Gluten Company es una empresa dedicada, y en beneficio de la comunidad celíaca
          Sin Gluten Company es una empresa dedicada, y en beneficio de la comunidad celíaca
          y a todo aquel que consuma alimentos libre de gluten. Somos la primera <strong>TARJETA DE BENEFICIOS </strong> 
          que conecta a los proveedores/marcas con el público <strong>GLUTEN FREE</strong>.
        </p>
      </div>  
      <div className="info-icons">
        <div className="group1">
        <img src={userIcon} alt="Usuario" />
        <img src={moneyIcon} alt="Dinero" />
        </div>
        <div className="group2">
        <img src={glutenFreeIcon} alt="Sin gluten" />
        <img src={healthIcon} alt="Salud" />
        </div> 
      </div>  
    </div>   
  );
};

export default InfoSGC;