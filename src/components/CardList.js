import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import { Autocomplete, TextField, Button } from "@mui/material";
import "./CardList.css"; 
import vermas from "../components/VerMas";

const CARDS_PER_ROW = 5;  
const INITIAL_ROWS = 5;  
const normalizeText = (text) => {
  return text?.trim().toLowerCase().replace(/[-\s]+/g, " "); 
};




const CardList = () => {
  const { category } = useParams(); // Obtener la categoría desde la URL
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  const [selectedFilters, setSelectedFilters] = useState({
    provincia: null,
    localidad: null,

  });
  console.log("📌 Data completa antes de filtrar:", data);
  console.log("📌 Categoría a filtrar:", category.replace("-", " ").trim().toLowerCase());
  
  
  useEffect(() => {
    fetch("/SGCDB.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const rawData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        setData(rawData); 
        
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {  // Solo filtra si hay datos cargados
      console.log("📌 Data completa antes de filtrar EN USE EFFECT:", data);
      console.log("📌 Categoría a filtrar:", category.replace("-", " ").trim().toLowerCase());
  
const filtered = data.filter(item => 
  normalizeText(item.Categoría) === normalizeText(category)
);

  
      console.log("✅ Datos filtrados:", filtered);
      setFilteredData(filtered);
    }
  }, [category, data]);
  

  const handleFilterChange = (field, value) => {
  const newFilters = { ...selectedFilters, [field]: value };
  setSelectedFilters(newFilters);

  let filtered = data.filter(item =>
    normalizeText(item.Categoría) === normalizeText(category)
  );

  if (newFilters.provincia) {
    filtered = filtered.filter((item) => normalizeText(item.Provincia) === normalizeText(newFilters.provincia));
  }
  if (newFilters.localidad) {
    filtered = filtered.filter((item) => normalizeText(item.Localidad) === normalizeText(newFilters.localidad));
  }

  setFilteredData(filtered);
  setVisibleRows(INITIAL_ROWS);
};


  const handleShowMore = () => {
    setVisibleRows((prev) => prev + INITIAL_ROWS);
  };
  console.log("Datos filtrados:", filteredData);
  console.log("Categorías disponibles:", [...new Set(data.map(item => item.Categoría))]);



  return (
    <div className="container">
      <h2>Descuentos en "{category ? category.replace("-", " ") : "Todas las categorías"}"</h2>

      <div className="filtrosLocales">
        <Autocomplete
          options={[...new Set(data.map((item) => item.Provincia?.trim()))]} 
          onChange={(event, newValue) => handleFilterChange("provincia", newValue)}
          renderInput={(params) => <TextField {...params} label="Provincia" />}
        />

        <Autocomplete
          options={[...new Set(data.map((item) => item.Localidad?.trim()))]} 
          onChange={(event, newValue) => handleFilterChange("localidad", newValue)}
          renderInput={(params) => <TextField {...params} label="Localidad" />}
        />
      </div>

      <div className="card-container">
        {filteredData.slice(0, visibleRows * CARDS_PER_ROW).map((local, index) => (
          <a key={index} href={local.link} target="_blank" rel="noopener noreferrer" className="card">
            <img src="/default-image.jpg" alt="Imagen Local" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{local["Nombre Local"]}</h3>
              <p className="card-description">{local.descripcion}</p>
            </div>
          </a>
        ))}
      </div>

      {visibleRows * CARDS_PER_ROW < filteredData.length && (
        <div className="ver-mas-container">
          <Button variant="contained" onClick={handleShowMore} className="ver-mas-btn">
            Ver más <ion-icon name="chevron-down-outline"></ion-icon>
          </Button>
          <vermas />
        </div>
      )}
    </div>
  );
};

export default CardList;
