import React, { useState, useEffect } from "react";
import "./LogoSlider.css";

const LogoSlider = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/logos?populate=*")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        // Verifica si la respuesta tiene datos
        if (data && data.data && data.data.length > 0) {
            const logosArray = data?.data?.[0]?.attributes?.imagenes?.data?.map(
                (img) => img.attributes.url
              );
              
              
              
              console.log(logosArray); // Verifica en la consola las URLs generadas
              
  
          if (logosArray) {
            setLogos(logosArray);
          } else {
            console.error("No image data found");
          }
        } else {
          console.error("No logos found in the response", data);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  
  
  
  
  return (
    <div className="logos-container">
      <div className="logos-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
