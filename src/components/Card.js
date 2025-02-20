import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirección
import "./Card.css";

const Card = ({ image, title, description, productPath }) => {
  const navigate = useNavigate(); // Hook para navegación

  const handleClick = () => {
    navigate(productPath); // Redirige a la ruta del producto
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
