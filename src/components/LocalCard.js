import React from "react";
import "./LocalCard.css";

const LocalCard = ({ name, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="local-card">
      <div
        className="local-image-placeholder"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      ></div>
      <p className="local-name">{name}</p> {/* Aca mostramos el nombre dinámico */}
    </a>
  );
};

export default LocalCard;
