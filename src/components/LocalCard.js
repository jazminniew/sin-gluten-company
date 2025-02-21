import React from "react";
import "./LocalCard.css";

const LocalCard = ({ name, imageUrl, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="local-card">
      <div
        className="local-image-placeholder"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      ></div>
      <p className="local-name">{/*name*/}Jazmin</p>
    </a>
  );
};

export default LocalCard;
