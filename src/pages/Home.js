import React, { useState } from "react";
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

const Home = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("¿Dónde?");
  const [showDropdown, setShowDropdown] = useState(false);
  const locations = ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"];

  return (
    <div className="home-container">
      <div className="image-wrapper">
      </div>

      <div className="filters-container">
        <Filter />
      </div>

      <div className="search-container">
        <div className="search-box">
          <div className="search-input" onClick={() => setShowDropdown(false)}>
            <span role="img" aria-label="search"><ion-icon class="searchIcon" name="search-outline"></ion-icon></span>
            <input
              type="text"
              placeholder="¿Qué buscas?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="search-location" onClick={() => setShowDropdown(!showDropdown)}>
            <span>{location}</span>
            <span role="img" aria-label="arrow">▼</span>

            {showDropdown && (
              <div className="dropdown">
                {locations.map((loc, index) => (
                  <div key={index} className="dropdown-item" onClick={() => { setLocation(loc); setShowDropdown(false); }}>
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="search-button">Buscar</button>
        </div>
      </div>

      <div className="blue-section">
      <Swiper
  effect="coverflow"
  grabCursor={false}
  centeredSlides={true}
  slidesPerView="auto"
  loop={true}
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

  <Card title="Shop" icon="cart-outline" buttonText="Ver más" />
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
