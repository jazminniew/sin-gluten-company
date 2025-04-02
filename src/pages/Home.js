import React, { useState, useEffect } from "react"; 
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
  const [data, setData] = useState([]); 
  const [search, setSearch] = useState(""); 
  const [location, setLocation] = useState("Provincia (Opcional)"); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [locations, setLocations] = useState([]); 
  const [filteredResults, setFilteredResults] = useState([]); 
  const [suggestions, setSuggestions] = useState([]); 
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/SGCDB.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
    
      setData(parsedData);
    
      const uniqueProvinces = [...new Set(parsedData.map((item) => item.Provincia))];
      setLocations(uniqueProvinces);
    };
    
    fetchData();
  }, []); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setShowDropdown(false); 
  };
  

  
  const handleSearch = () => {
    if (search.trim() === "") {
      return;
    }
      
    let results = data.filter((item) => {
      return item["Nombre Local"] && item["Nombre Local"].toLowerCase().includes(search.toLowerCase());
    });
  
    if (location && location !== "Provincia (Opcional)") {
      results = results.filter((item) => item.Provincia && item.Provincia === location);
    }
    
    setFilteredResults(results); 
    setHasSearched(true);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  
    if (value.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item["Nombre Local"] && item["Nombre Local"].toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion["Nombre Local"]);
    setSuggestions([]); 
  };


  return (
    <div className="home-container">
      <div className="image-wrapper"></div>
      
      <div className="filters-container">
        <Filter />
      </div>

      <div className="search-container">
        <div className="search-box">
          <div className="search-input" onClick={() => setShowDropdown(false)}>
            <span role="img" aria-label="search">
            <img src="/ionicons/search-outline.svg" alt="Search" className="searchIcon" />
            </span>
            <input
              type="text"
              placeholder="¿Qué local buscas?"
              value={search}
              onChange={handleSearchChange} 
              onKeyDown={handleKeyDown} 
            />

            {suggestions.length > 0 && (
              <div className="suggestions-dropdown">
                {suggestions.map((item, index) => (
                  <div 
                    key={index} 
                    className="suggestions-item"
                    onClick={() => handleSuggestionClick(item)} 
                  >
                    {item["Nombre Local"]}
                  </div>
                ))}
              </div>
            )}
          </div>

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

<div className="results-container">
  {filteredResults.length === 0 && hasSearched ? (
    <p>No se encontraron resultados.</p>
  ) : (
    filteredResults.map((item, index) => (
      <div key={index} className="card">
        <img src={item.Imagen} alt={item["Nombre Local"]} className="card-image" />
        <h3>{item["Nombre Local"]}</h3>
        <p>{item.Descripción}</p>
        <div className="ver-mas-container">
        {item.link && (
  <a href={item.link} target="_blank" rel="noopener noreferrer" className="ver-mas-link">
    Ver más
  </a>
)}

</div>


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
  loop={filteredResults.length > 5} 
  autoplay={{ delay: 3000, disableOnInteraction: false }} 
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,
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
  iconSrc="/ionicons/location-outline.svg"
  buttonText="Ver más" 
  link="https://maps.app.goo.gl/tLvusPMLHyei36gW6?g_st=i"
/>

<Card 
  title="Suscribite" 
  iconSrc="/ionicons/mail-outline.svg"
  buttonText="Ver más" 
  link="https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/"
/>

<Card 
  title="Adherí tu comercio" 
  iconSrc="/ionicons/storefront-outline.svg"
  buttonText="Ver más" 
  link="/adherir"
/>



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