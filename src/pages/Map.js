import React from "react";
import Select from "../components/Select"; 
import Filter from "../components/Filter";
import Suscribe from "../components/Suscribe";
import "./Map.css";

const Map = () => {
  return (
    <div>
       <Filter />
       <h1 className="mapTitle">Encuentre los descuentos cerca de tu casa</h1>
       <Select />
      {/*<a href="https://maps.app.goo.gl/2PREd6zgS8AgrnRq6" target="_blank">Ver lista de locales en Google Maps</a>*/}
      <div class="map-container">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49138261.7778397!2d-106.57674145!3d-41.26181971269242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1740110182060!5m2!1ses!2sar" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>
     <Suscribe />  
   </div>
  );
};

export default Map;
