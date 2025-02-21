import React from "react";
import LocalCard from "./LocalCard";
import "./OurLocals.css";

const localsData = [
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
  { name: "Amaranto", image: "ruta-del-logo.png", link: "https://instagram.com" },
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
