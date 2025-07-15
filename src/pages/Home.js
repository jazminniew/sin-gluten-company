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
import { motion } from "framer-motion";
import publicidad1 from "../Images/publicidad1.jpg";
import publicidad2 from "../Images/publicidad2.jpg";
import publicidad3 from "../Images/publicidad3.jpg";
import publicidad4 from "../Images/publicidad4.jpg";
import publicidad5 from "../Images/publicidad5.jpg";



const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


const Home = () => {
  // Estados para manejar los datos, búsqueda y filtrado
  const [data, setData] = useState([]); 
  const [search, setSearch] = useState(""); 
  const [location, setLocation] = useState("Provincia (Opcional)"); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [locations, setLocations] = useState([]); 
  const [filteredResults, setFilteredResults] = useState([]); 
  const [suggestions, setSuggestions] = useState([]); 
  const [visibleCount, setVisibleCount] = useState(8);
  const [hasSearched, setHasSearched] = useState(false);
const [logoCarousel, setLogoCarousel] = useState([]);



  // Cargar datos desde el archivo Excel al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/SGCDB.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      // Justo después de `const parsedData = XLSX.utils.sheet_to_json(sheet);`
const normalizedData = parsedData.map(item => ({
  ...item,
  descripcion: item.Descripción || item.descripcion || "",
}));
setData(normalizedData);

    
      setData(parsedData);
const logoImages = parsedData
        .filter(item => item.logoCarrousel)
        .map(item => item.logoCarrousel);

      // 3️Barajamos aquí y guardamos el estado
      setLogoCarousel(shuffleArray(logoImages));

    // Obtener lista única de provincias
   // Obtener lista única de provincias, excluyendo valores no deseados
const uniqueProvinces = [...new Set(
  parsedData
    .map((item) => item.Provincia)
    .filter((prov) =>
      prov &&
      !["POR EL MUNDO", "Heladerías", "Envíos a todo el país", "Hotelería", "Almacenes-Dietéticas-Distribuidoras", "Viandas-Comidas Congeladas, Catering-Hotelería", "Restaurantes-Cafeterías", "Panaderías-Pastelerías-Chocolaterías", "Pizza-Empanadas-Pastas"].includes(prov)
    )
)];
setLocations(uniqueProvinces);
 };
  
      fetchData();
    }, []);

  // Cerrar el dropdown si se hace clic fuera de la búsqueda
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
  
  // Seleccionar una provincia en el dropdown
  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setShowDropdown(false); 
  };
  
  // Buscar locales por nombre y provincia
  const handleSearch = () => {
  let results = data;

  // Si hay algo en el campo de búsqueda, filtra por nombre
  if (search.trim() !== "") {
    results = results.filter((item) => 
      item["Nombre Local"] &&
      item["Nombre Local"].toLowerCase().includes(search.toLowerCase())
    );
  }

  // Si hay una provincia seleccionada (y no es el placeholder), filtrá también por provincia
  if (location && location !== "Provincia (Opcional)") {
    results = results.filter((item) => item.Provincia && item.Provincia === location);
  }

  setFilteredResults(results);
  setVisibleCount(8);
  setHasSearched(true);
};

  
  // Ejecutar búsqueda al presionar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Manejar cambios en la barra de búsqueda y sugerencias
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
  
  // Seleccionar una sugerencia
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion["Nombre Local"]);
    setSuggestions([]); 
  };

const cardVariants = {
  hidden: { opacity: 0, y: 80 }, // Aumenta la distancia inicial para que suba más
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } // Duración más larga
  },
  hover: { 
    scale: 1.1,  // Aumenta el efecto de agrandamiento
    transition: { duration: 0.3, ease: "easeInOut" } 
  },
};

const carouselImages = [
  publicidad1,
    publicidad2,
      publicidad3,
        publicidad4,
          publicidad5,
];

  return (
    <div>
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="image-wrapper">
      </div>
      {/* Contenedor de filtros con animación */}
      <motion.div 
        className="filters-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Filter />
      </motion.div>
  
      {/* Barra de búsqueda */}
      <div className="search-container">
        <div className="search-box">
          <div className="search-input" onClick={() => setShowDropdown(false)}>
            <img src="/ionicons/search-outline.svg" alt="Search" className="searchIcon" />
            <input
              type="text"
              placeholder="¿Qué local buscas?"
              value={search}
              onChange={handleSearchChange} 
              onKeyDown={handleKeyDown} 
            />
  
            {/* Sugerencias */}
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
  
          {/* Filtro por provincia */}
          <div className="search-location" onClick={() => setShowDropdown(!showDropdown)}>
            <span>{location}</span>
            <span role="img" aria-label="arrow">▼</span>
  
            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-item" onClick={() => handleLocationSelect("Provincia (Opcional)")}>
                  Todas las provincias
                </div>
                {locations.map((loc, index) => (
                  <div key={index} className="dropdown-item" onClick={() => handleLocationSelect(loc)}>
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
  
          <button className="search-button" onClick={handleSearch}>Buscar</button>
        </div>
      </div>
  
      {/* Resultados de búsqueda */}
      <div className="results-container">

{filteredResults.slice(0, visibleCount).map((item, index) => (
  <div key={index} className="card card-result">
    <img src={item.Imagen} alt={item["Nombre Local"]} className="card-image" />
    <h3>{item["Nombre Local"]}</h3>
    <p>{item.descripcion}</p>

    <div className="ver-mas-container">
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ver-mas-link"
        >
          Ver más
        </a>
      )}
    </div>
  </div>
))}

{/* Mostrar mensaje si no hay resultados */}
{hasSearched && filteredResults.length === 0 && (
  <div style={{ textAlign: "center",justifyContent:"center", marginTop: "30px", color: "#000", width: "400px", height:"100px", padding:"20px", backgroundColor:"#ffcdcd", borderRadius:"10px" }}>
    No se encontró "{search}" en {location !== "Provincia (Opcional)" ? location : "ninguna provincia"}
  </div>
)}

{visibleCount < filteredResults.length && (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <button
      className="search-button"
      onClick={() => setVisibleCount(visibleCount + 8)}
    >
      Ver más locales
    </button>
  </div>
)}

      </div>
  
      {/* Carrusel de promociones */}
      <div className="blue-section">
      <Swiper
  effect="coverflow"
  grabCursor={false}
  centeredSlides={true}
  slidesPerView="auto"
  loop={carouselImages.length > 5}
  autoplay={{ delay: 10000, disableOnInteraction: false }}
  coverflowEffect={{ rotate: 0, stretch: 0, depth: 200, modifier: 3, slideShadows: false }}
  modules={[EffectCoverflow, Autoplay]}
  className="mySwiper"
>
  {carouselImages.map((img, i) => (
    <SwiperSlide key={i}><img src={img} alt={`Imagen ${i + 1}`} /></SwiperSlide>
  ))}
</Swiper>

      </div>
  
      {/* Tarjetas de información */}
      <div className="info-cards">
      {[
        { title: "Beneficios cerca de mío", iconSrc: "/ionicons/location-outline.svg", link: "https://maps.app.goo.gl/tLvusPMLHyei36gW6?g_st=i" },
        { title: "Suscribite", iconSrc: "/ionicons/mail-outline.svg", link: "https://fresapagos.com/p/subscriptions/subscribe/JCGX17SI64RH3KM613/" },
        { title: "Adherí tu comercio", iconSrc: "/ionicons/storefront-outline.svg", link: "/adherir" },
      ].map((item, index) => (
        <motion.div 
        key={index}
        className="card-wrapper"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.1 }}
        onViewportEnter={() => console.log(`Tarjeta ${index} visible`)}
      >
        <Card class="card-result" title={item.title} iconSrc={item.iconSrc} buttonText="Ver más" link={item.link} />
      </motion.div>
      
      ))}
    </div>
  
      {/* Logos de empresas asociadas */}
      <div className="logos-container">
  <div className="logos-slide">
    {logoCarousel.map((img, i) => <img key={i} src={img} alt="Empresa" />)}
  </div>
</div>

    </motion.div>

    <Suscribe/>
    </div>
  );
  
};

export default Home;
