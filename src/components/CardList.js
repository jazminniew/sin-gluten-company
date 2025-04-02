import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import { Autocomplete, TextField, Button, Tooltip } from "@mui/material";
import "./CardList.css";

//maximo 5 filas antes de presionar boton "ver mas"
const CARDS_PER_ROW = 5;
const INITIAL_ROWS = 5;

const normalizeText = (text) => {
  return text?.trim().toLowerCase().replace(/[-\s]+/g, " ");
};

const CardList = () => {
  const { category } = useParams();
  const [currentCategory, setCurrentCategory] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  const [selectedFilters, setSelectedFilters] = useState({
    provincia: null,
    localidad: null,
  });

  useEffect(() => {
    setCurrentCategory(category);
  }, [category]);

//sacar las cosas del excel
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
    let filtered = data.filter(
      (item) => normalizeText(item.Categoría) === normalizeText(category)
    );

    //filtro de provincia
    if (selectedFilters.provincia) {
      filtered = filtered.filter(
        (item) =>
          normalizeText(item.Provincia) === normalizeText(selectedFilters.provincia)
      );
    }

    //filtro de localidad
    if (selectedFilters.localidad) {
      filtered = filtered.filter(
        (item) =>
          normalizeText(item.Localidad) === normalizeText(selectedFilters.localidad)
      );
    }

    setFilteredData(filtered);
    setVisibleRows(INITIAL_ROWS);
  }, [category, data, selectedFilters]);

  const handleFilterChange = (field, value) => {
    const newFilters = { ...selectedFilters, [field]: value };

    // Si se elige una provincia, resetear localidad si no está en ella
    if (field === "provincia") {
      const availableLocalities = [
        ...new Set(
          data
            .filter(
              (item) =>
                normalizeText(item.Categoría) === normalizeText(category) &&
                normalizeText(item.Provincia) === normalizeText(value)
            )
            .map((item) => item.Localidad?.trim())
        ),
      ];
      if (!availableLocalities.includes(selectedFilters.localidad)) {
        newFilters.localidad = null;
      }
    }

    // Si se elige una localidad, resetear provincia si no está en ella
    if (field === "localidad") {
      const matchingProvince = data.find(
        (item) =>
          normalizeText(item.Categoría) === normalizeText(category) &&
          normalizeText(item.Localidad) === normalizeText(value)
      )?.Provincia;
      if (matchingProvince !== selectedFilters.provincia) {
        newFilters.provincia = matchingProvince || null;
      }
    }

    setSelectedFilters(newFilters);
  };

  /** Filtrar provincias y localidades dinámicamente */
  const availableProvinces = [
    ...new Set(
      data
        .filter(
          (item) =>
            normalizeText(item.Categoría) === normalizeText(category) &&
            (!selectedFilters.localidad || normalizeText(item.Localidad) === normalizeText(selectedFilters.localidad))
        )
        .map((item) => item.Provincia?.trim())
    ),
  ];

  const availableLocalities = [
    ...new Set(
      data
        .filter(
          (item) =>
            normalizeText(item.Categoría) === normalizeText(category) &&
            (!selectedFilters.provincia || normalizeText(item.Provincia) === normalizeText(selectedFilters.provincia))
        )
        .map((item) => item.Localidad?.trim())
    ),
  ];

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + INITIAL_ROWS);
  };

  return (
    <div className="container">
      <h2>
        Descuentos en{" "}
        {currentCategory
          ? currentCategory.replace(/-/g, " ").toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
          : "Todas las categorías"}
      </h2>

      <div className="filtrosLocales">
        <Autocomplete
          options={availableProvinces}
          value={selectedFilters.provincia}
          onChange={(event, newValue) => handleFilterChange("provincia", newValue)}
          renderInput={(params) => <TextField {...params} label="Provincia" />}
        />

        <Autocomplete
          options={availableLocalities}
          value={selectedFilters.localidad}
          onChange={(event, newValue) => handleFilterChange("localidad", newValue)}
          renderInput={(params) => <TextField {...params} label="Localidad" />}
        />
      </div>

      <div className="card-container">
        {filteredData.slice(0, visibleRows * CARDS_PER_ROW).map((local, index) => (
          <a key={index} href={local.link} target="_blank" rel="noopener noreferrer" className="card">
            <img
              src={local.Imagen || "../Images/advertisment.jpg"}
              alt={local["Nombre Local"]}
              className="card-image"
            />
            <Tooltip title={local.descuento ? `Descuento: ${local.descuento}%` : "Sin descuento"} arrow>
              <div className="card-content">
                <h3 className="card-title">{local["Nombre Local"]}</h3>
                <p className="card-description">{local.descripcion}</p>
              </div>
            </Tooltip>
          </a>
        ))}
      </div>

      {filteredData.length === 0 && <p>No hay resultados disponibles.</p>}

      {visibleRows * CARDS_PER_ROW < filteredData.length && (
        <div className="ver-mas-container">
          <Button onClick={handleShowMore} className="ver-mas-btn">
            Ver más
          </Button>
        </div>
      )}
    </div>
  );
};

export default CardList;
