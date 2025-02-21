import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Card.css";

const Card = ({ image, title, description, productPath }) => {
  const navigate = useNavigate(); 

   //cuando hago clic en la tarjeta, redirige a la ruta productPath
  const handleClick = () => {
    navigate(productPath); 
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
