import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Filter.css";

const Filter = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

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

  const handleClick = (index, category) => {
    if (activeIndex === index) {
      // Si el botón ya está seleccionado, reseteamos y vamos a "/"
      setActiveIndex(null);
      navigate("/");
    } else {
      // Convertimos el nombre a una URL válida (sin espacios)
      const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
      setActiveIndex(index);
      navigate(`/category/${formattedCategory}`);
    }
  };

  return (
    <div className="filter-container">
      {/* Primera fila (4 elementos) */}
      <div className="tabs">
        {tabs.slice(0, 4).map((tab, i) => (
          <button
            key={i}
            className={`tab ${activeIndex === i ? "active" : ""}`}
            onClick={() => handleClick(i, tab.name)}
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
            className={`tab ${activeIndex === i + 4 ? "active" : ""}`}
            onClick={() => handleClick(i + 4, tab.name)}
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
          className={`tab single-tab ${activeIndex === 8 ? "active" : ""}`}
          onClick={() => handleClick(8, tabs[8].name)}
        >
          <ion-icon name={tabs[8].icon}></ion-icon>
          <span>{tabs[8].name}</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
