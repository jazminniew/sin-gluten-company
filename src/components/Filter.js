import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [index, setIndex] = useState(null);

  const tabs = [
    { name: "Viandas/Comidas Congeladas", icon: "fast-food-outline" },
    { name: "Restaurantes/Cafeterías", icon: "restaurant-outline" },
    { name: "Panaderías/Pastelerías/Chocolaterías", icon: "cafe-outline" },
    { name: "Envíos a todo el país", icon: "airplane-outline" },
    { name: "Pizza/Empanadas/Pastas", icon: "pizza-outline" },
    { name: "Almacenes/Dietéticas/Distribuidoras", icon: "storefront-outline" },
    { name: "Heladerías", icon: "ice-cream-outline" },
    { name: "POR EL MUNDO", icon: "globe-outline" },
    { name: "Hotelería", icon: "bed-outline" },
  ];

  const handleClick = (i) => {
    setIndex(index === i ? null : i);
  };

  return (
    <div className="filter-container">
      {/* Primera fila (4 elementos) */}
      <div className="tabs">
        {tabs.slice(0, 4).map((tab, i) => (
          <button
            key={i}
            className={`tab ${index === i ? "active" : ""}`}
            onClick={() => handleClick(i)}
          >
            <ion-icon name={tab.icon}></ion-icon>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Segunda fila (4 elementos) */}
      <div className="tabs second-row">
        {tabs.slice(4, 8).map((tab, i) => (
          <button
            key={i + 4}
            className={`tab ${index === i + 4 ? "active" : ""}`}
            onClick={() => handleClick(i + 4)}
          >
            <ion-icon name={tab.icon}></ion-icon>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tercera fila (1 solo elemento) */}
      <div className="tabs third-row">
        <button
          key={8}
          className={`tab single-tab ${index === 8 ? "active" : ""}`}
          onClick={() => handleClick(8)}
        >
          <ion-icon name={tabs[8].icon}></ion-icon> 
          <span>{tabs[8].name}</span> 
        </button>
      </div>
    </div>
  );
};

export default Filter;
