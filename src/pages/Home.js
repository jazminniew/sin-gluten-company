import React, { useState, useEffect } from "react"; // ✅ Importa useEffect aquí
import "./Home.css";
import Filter from "../components/Filter";
import Suscribe from "../components/Suscribe";
import Card from "../components/Home-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"; 
import { EffectCoverflow, Autoplay } from "swiper/modules";
import logo from "../Images/logo.png"; 
import * as XLSX from "xlsx";



const Home = () => {
  const [data, setData] = useState([]); // Datos del Excel
  const [search, setSearch] = useState(""); 
  const [location, setLocation] = useState("Provincia (Opcional)"); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [locations, setLocations] = useState([]); // Provincias únicas
  const [filteredResults, setFilteredResults] = useState([]); // Resultados filtrados
  const [suggestions, setSuggestions] = useState([]); // Sugerencias para autocompletado
  const [hasSearched, setHasSearched] = useState(false);


  // Cargar datos desde el archivo XLSX
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/SGCDB.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
    
      setData(parsedData);
    
      // Filtrar provincias únicas
      const uniqueProvinces = [...new Set(parsedData.map((item) => item.Provincia))];
      setLocations(uniqueProvinces);
    };
    
    fetchData();
  }, []); // Esto solo carga los datos cuando el componente se monta

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };
  
    // Escuchar clics fuera
    document.addEventListener('click', handleClickOutside);
  
    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setShowDropdown(false); // Cierra el dropdown
  };

  
  const handleSearch = () => {
    if (search.trim() === "") {
      // Si el campo de búsqueda está vacío, no se ejecuta la búsqueda
      return;
    }
    
    console.log("Buscando:", search, "Provincia:", location); // Verifica los valores antes de filtrar
  
    let results = data.filter((item) => {
      // Filtrar por nombre de local
      return item["Nombre Local"] && item["Nombre Local"].toLowerCase().includes(search.toLowerCase());
    });
  
    if (location && location !== "Provincia (Opcional)") {
      // Filtrar por provincia
      results = results.filter((item) => item.Provincia && item.Provincia === location);
    }
  
    console.log("Resultados después de filtro:", results); // Verifica los resultados filtrados
  
    setFilteredResults(results); // Actualiza los resultados
    setHasSearched(true); // Marca que se ha realizado una búsqueda
  };
  

  // Función para manejar presionar tecla Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Función para manejar el cambio en el campo de búsqueda (sugerencias)
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  
    // Filtrar sugerencias a medida que el usuario escribe
    if (value.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item["Nombre Local"] && item["Nombre Local"].toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  

  // Función para manejar el clic en una sugerencia
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion["Nombre Local"]);
    setSuggestions([]); // Oculta las sugerencias al seleccionar una
  };

  return (
    <div className="home-container">
      <div className="image-wrapper"></div>
      
      {/* Filtros */}
      <div className="filters-container">
        <Filter />
      </div>

      {/* Barra de búsqueda */}
      <div className="search-container">
        <div className="search-box">
          <div className="search-input" onClick={() => setShowDropdown(false)}>
            <span role="img" aria-label="search">
              <ion-icon className="searchIcon" name="search-outline"></ion-icon>
            </span>
            <input
              type="text"
              placeholder="¿Qué buscas?"
              value={search}
              onChange={handleSearchChange} // Actualiza el estado de búsqueda
              onKeyDown={handleKeyDown} // Detecta la tecla Enter
            />

            {/* Mostrar sugerencias si existen */}
            {suggestions.length > 0 && (
              <div className="suggestions-dropdown">
                {suggestions.map((item, index) => (
                  <div 
                    key={index} 
                    className="suggestions-item"
                    onClick={() => handleSuggestionClick(item)} // Hace clic en una sugerencia
                  >
                    {item["Nombre Local"]}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Selector de provincia */}
          <div className="search-location" onClick={() => setShowDropdown(!showDropdown)}>
            <span>{location}</span>
            <span role="img" aria-label="arrow">▼</span>

            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-item" onClick={() => { setLocation("Provincia (Opcional)"); setShowDropdown(false); }}>
                  Todas las provincias
                </div>
                {locations.map((loc, index) => (
                  <div key={index} className="dropdown-item" onClick={() => { setLocation(loc); setShowDropdown(false); }}>
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="search-button" onClick={handleSearch}>Buscar</button>
        </div>
      </div>

   {/* Resultados filtrados */}
<div className="results-container">
  {filteredResults.length === 0 && hasSearched ? (
    <p>No se encontraron resultados.</p>
  ) : (
    filteredResults.map((item, index) => (
      <div key={index} className="card">
        <img src={item.Imagen} alt={item["Nombre Local"]} className="card-image" />
        <h3>{item["Nombre Local"]}</h3>
        <p>{item.Descripción}</p>
        <a href={item.Link} target="_blank" rel="noopener noreferrer" className="card-link">
          Ver más
        </a>
      </div>
    ))
  )}
</div>





      <div className="blue-section">
      <Swiper
  effect="coverflow"
  grabCursor={false}
  centeredSlides={true}
  slidesPerView="auto"
  loop={filteredResults.length > 5}  // Desactivar loop si hay pocos slides
  autoplay={{ delay: 5500, disableOnInteraction: false }} 
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 400,
    modifier: 3,
    slideShadows: false,
  }}
  modules={[EffectCoverflow, Autoplay]}
  className="mySwiper"
>


  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 1" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 2" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 3" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>
  <SwiperSlide><img src="/Images/fake-promo.png" alt="Imagen 4" /></SwiperSlide>

</Swiper>

      </div>
      <div className="info-cards">
      <Card 
  title="Cerca mío" 
  icon="location-outline" 
  buttonText="Ver más" 
  link="https://maps.app.goo.gl/tLvusPMLHyei36gW6?g_st=i"
/>


  <Card 
  title="Suscribite" 
  icon="mail-outline" 
  buttonText="Ver más" 
  link="https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/"
/>
<Card 
  title="Adherí tu comercio" 
  icon="storefront-outline" 
  buttonText="Ver más" 
  link="/adherir"
/>

  {/*<Card title="Shop" icon="cart-outline" buttonText="Ver más" />*/}
</div>
      <div className="logos-container">
  <div className="logos-slide">
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    {/* Se duplican los logos para la animación infinita */}
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
    <img src={logo} alt="Empresa 1"/>
  </div>
</div>

<Suscribe />


    </div>

    
  );
};

export default Home;
