import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Filter.css";

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Estado para el filtro activo
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = localStorage.getItem("activeFilter");
    return savedIndex !== null ? parseInt(savedIndex) : null;
  });

  const tabs = [
    { name: "Viandas-Comidas Congeladas", iconSrc: "/ionicons/fast-food-outline.svg" },
    { name: "Restaurantes-Cafeterías", iconSrc: "/ionicons/restaurant-outline.svg" },
    { name: "Panaderías-Pastelerías-Chocolaterías", iconSrc: "/ionicons/cafe-outline.svg" },
    { name: "Envíos a todo el país", iconSrc: "/ionicons/airplane-outline.svg" },
    { name: "Pizza-Empanadas-Pastas", iconSrc: "/ionicons/pizza-outline.svg" },
    { name: "Almacenes-Dietéticas-Distribuidoras", iconSrc: "/ionicons/storefront-outline.svg" },
    { name: "Heladerías", iconSrc: "/ionicons/ice-cream-outline.svg" },
    { name: "POR EL MUNDO", iconSrc: "/ionicons/globe-outline.svg" },
    { name: "Hotelería", iconSrc: "/ionicons/bed-outline.svg" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;

    // 🔹 Si estamos en Home, reseteamos el filtro
    if (currentPath === "/") {
      setActiveIndex(null);
      localStorage.removeItem("activeFilter");
    } else {
      // 🔹 Si estamos en una categoría, activamos el filtro correcto
      const matchedIndex = tabs.findIndex(
        (tab) => `/category/${tab.name.toLowerCase().replace(/\s+/g, "-")}` === currentPath
      );

      if (matchedIndex !== -1) {
        setActiveIndex(matchedIndex);
      }
    }
  }, [location.pathname]); // Se ejecuta cuando cambia la URL

  const handleClick = (index, category) => {
    if (activeIndex === index) {
      // Si ya está activo, lo desactivamos y volvemos a Home
      setActiveIndex(null);
      localStorage.removeItem("activeFilter");
      setTimeout(() => navigate("/"), 50);
    } else {
      // Activamos el filtro y navegamos a la categoría
      setActiveIndex(index);
      localStorage.setItem("activeFilter", index);
      setTimeout(() => navigate(`/category/${category.toLowerCase().replace(/\s+/g, "-")}`), 50);
    }
  };

  return (
    <div className="filter-container">
      {/* Primera fila */}
      <div className="tabs">
        {tabs.slice(0, 4).map((tab, i) => (
          <button
            key={i}
            className={`tab ${activeIndex === i ? "active" : ""}`}
            onClick={() => handleClick(i, tab.name)}
          >
            <img src={tab.iconSrc} alt={tab.name} className="tab-icon" />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Segunda fila */}
      <div className="tabs second-row">
        {tabs.slice(4, 8).map((tab, i) => (
          <button
            key={i + 4}
            className={`tab ${activeIndex === i + 4 ? "active" : ""}`}
            onClick={() => handleClick(i + 4, tab.name)}
          >
            <img src={tab.iconSrc} alt={tab.name} className="tab-icon" />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tercera fila */}
      <div className="tabs third-row">
        <button
          key={8}
          className={`tab single-tab ${activeIndex === 8 ? "active" : ""}`}
          onClick={() => handleClick(8, tabs[8].name)}
        >
          <img src={tabs[8].iconSrc} alt={tabs[8].name} className="tab-icon" />
          <span>{tabs[8].name}</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
