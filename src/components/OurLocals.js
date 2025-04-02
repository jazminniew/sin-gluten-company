import React from "react";
import LocalCard from "./LocalCard";
import "./OurLocals.css";

const localsData = [
  { name: "Local 1", image: "ruta-del-logo-amaranto.png", link: "https://instagram.com" },
  { name: "Local 2", image: "ruta-del-logo-local2.png", link: "https://instagram.com" },
  { name: "Local 3", image: "ruta-del-logo-local3.png", link: "https://instagram.com" },
  { name: "Local 4", image: "ruta-del-logo-local4.png", link: "https://instagram.com" },
  { name: "Local 5", image: "ruta-del-logo-amaranto.png", link: "https://instagram.com" },
  { name: "Local 2", image: "ruta-del-logo-local2.png", link: "https://instagram.com" },
  { name: "Local 3", image: "ruta-del-logo-local3.png", link: "https://instagram.com" },
  { name: "Local 4", image: "ruta-del-logo-local4.png", link: "https://instagram.com" },
  { name: "Local 5", image: "ruta-del-logo-amaranto.png", link: "https://instagram.com" },
  { name: "Local 2", image: "ruta-del-logo-local2.png", link: "https://instagram.com" },
  { name: "Local 3", image: "ruta-del-logo-local3.png", link: "https://instagram.com" },
  { name: "Local 4", image: "ruta-del-logo-local4.png", link: "https://instagram.com" },
  // Agregar más datos de locales aca...
];

const OurLocals = () => {
  return (
    <div className="component">
      <div className="our-locals">
        <div className="locals-grid">
          {localsData.map((local, index) => (
            <LocalCard key={index} name={local.name} image={local.image} link={local.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLocals;
