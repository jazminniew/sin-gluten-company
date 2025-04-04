import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import { Autocomplete, TextField, Button, Tooltip } from "@mui/material";
import "./CardList.css";

const CARDS_PER_ROW = 5;
const INITIAL_ROWS = 5;

// Normaliza el texto para comparaciones
const normalizeText = (text) =>
  text?.trim().toLowerCase().replace(/[-\s]+/g, " ");

// Mapeo entre el nombre de la columna en el Excel y la propiedad interna de los filtros
const fieldMapping = {
  Provincia: "provincia",
  Localidad: "localidad",
  beneficio: "beneficio",
  formaVenta: "formaVenta",
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
    beneficio: null,
    formaVenta: null,
  });

  // Actualiza la categoría actual
  useEffect(() => {
    setCurrentCategory(category);
  }, [category]);

  // Carga el Excel
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

  // Base filtrada por categoría
  const getFilteredBase = () =>
    data.filter(
      (item) => normalizeText(item.Categoría) === normalizeText(category)
    );

  // Filtra los datos aplicando TODOS los filtros (usando el mapping)
  const getFilteredDataWithFilters = () => {
    return getFilteredBase().filter((item) =>
      Object.entries(fieldMapping).every(([excelKey, stateKey]) => {
        return (
          !selectedFilters[stateKey] ||
          normalizeText(item[excelKey]) === normalizeText(selectedFilters[stateKey])
        );
      })
    );
  };

  // Devuelve las opciones disponibles para un filtro dado (ej. "Provincia") según los otros filtros ya aplicados
  const getOptions = (excelKey, filters = selectedFilters) => {
    const base = getFilteredBase().filter((item) => {
      let valid = true;
      // Recorre todos los filtros menos el que estamos generando opciones
      Object.entries(fieldMapping).forEach(([key, stateKey]) => {
        if (key === excelKey) return;
        if (filters[stateKey] && normalizeText(item[key]) !== normalizeText(filters[stateKey])) {
          valid = false;
        }
      });
      return valid;
    });
    return [...new Set(base.map((item) => item[excelKey]?.trim()).filter(Boolean))];
  };

  // Autocompleta todos los filtros en conjunto si sólo hay una opción válida para alguno
  useEffect(() => {
    const updatedFilters = { ...selectedFilters };
    let changed = false;
    // Para cada filtro (usamos las keys del mapping)
    Object.entries(fieldMapping).forEach(([excelKey, stateKey]) => {
      const options = getOptions(excelKey, updatedFilters);
      if (options.length === 1 && !updatedFilters[stateKey]) {
        updatedFilters[stateKey] = options[0];
        changed = true;
      }
    });
    if (changed) {
      setSelectedFilters(updatedFilters);
    }
  }, [selectedFilters, data, category]);

  // Actualiza los datos filtrados
  useEffect(() => {
    const filtered = getFilteredDataWithFilters();
    setFilteredData(filtered);
    setVisibleRows(INITIAL_ROWS);
  }, [selectedFilters, data, category]);

  // Si se borra (la X) un filtro, reinicia TODOS los filtros
  const handleFilterChange = (field, value) => {
    if (value === null) {
      setSelectedFilters({
        provincia: null,
        localidad: null,
        beneficio: null,
        formaVenta: null,
      });
    } else {
      setSelectedFilters((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + INITIAL_ROWS);
  };

  // Obtiene las opciones disponibles para cada filtro
  const availableProvinces = getOptions("Provincia");
  const availableLocalities = getOptions("Localidad");
  const availableBeneficios = getOptions("beneficio");
  const availableFormasVenta = getOptions("formaVenta");

  return (
    <div className="container">
      <h2>
        Descuentos en{" "}
        {currentCategory
          ? currentCategory
              .replace(/-/g, " ")
              .toLowerCase()
              .replace(/^\w/, (c) => c.toUpperCase())
          : "Todas las categorías"}
      </h2>

      <div className="filtrosLocales">
        <Autocomplete
          options={availableProvinces}
          value={selectedFilters.provincia}
          onChange={(event, newValue) => handleFilterChange("provincia", newValue)}
          renderInput={(params) => <TextField {...params} label="Provincia" />}
          disableClearable={false}
          isOptionEqualToValue={(option, value) => option === value}
        />

        <Autocomplete
          options={availableLocalities}
          value={selectedFilters.localidad}
          onChange={(event, newValue) => handleFilterChange("localidad", newValue)}
          renderInput={(params) => <TextField {...params} label="Localidad" />}
          disableClearable={false}
          isOptionEqualToValue={(option, value) => option === value}
        />

        <Autocomplete
          options={availableBeneficios}
          value={selectedFilters.beneficio}
          onChange={(event, newValue) => handleFilterChange("beneficio", newValue)}
          renderInput={(params) => <TextField {...params} label="Día de beneficio" />}
          disableClearable={false}
          isOptionEqualToValue={(option, value) => option === value}
        />

        <Autocomplete
          options={availableFormasVenta}
          value={selectedFilters.formaVenta}
          onChange={(event, newValue) => handleFilterChange("formaVenta", newValue)}
          renderInput={(params) => <TextField {...params} label="Forma de venta" />}
          disableClearable={false}
          isOptionEqualToValue={(option, value) => option === value}
        />
      </div>

      <div className="card-container">
        {filteredData.slice(0, visibleRows * CARDS_PER_ROW).map((local, index) => (
          <a
            key={index}
            href={local.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={local.Imagen || "../Images/advertisment.jpg"}
              alt={local["Nombre Local"]}
              className="card-image"
            />
            <Tooltip
              title={local.descuento ? `Descuento: ${local.descuento}%` : "Sin descuento"}
              arrow
            >
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
