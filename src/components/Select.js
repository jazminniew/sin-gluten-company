import React, { useState } from "react";
import "./Select.css";

const Select = ({ title, onFilterChange }) => {  
  const [selectedFilters, setSelectedFilters] = useState([]);

  const tabsSelect = [
    "Provincia",
    "Localidad",
    "Día de Beneficio",
    "Forma de Venta"
  ];

  const handleClick = (tab) => {
    let updatedFilters;

    if (selectedFilters.includes(tab)) {
      updatedFilters = selectedFilters.filter((filter) => filter !== tab);
    } else {
      updatedFilters = [...selectedFilters, tab];
    }

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters); // Notifica el cambio a CardList
  };

  return (
    <div className="select-wrapper">
      <h4 className="title">{title}</h4>
      <div className="select-container">
        <div className="tabsSelect">
          {tabsSelect.map((tab, i) => (
            <button
              key={i}
              className={`tabSelect ${selectedFilters.includes(tab) ? "active" : ""}`}
              onClick={() => handleClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
