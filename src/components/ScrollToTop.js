import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Detecta el cambio de ruta

  useEffect(() => {
    // Desplazar a la parte superior con una transición suave
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // Esto le da la animación suave
    });
  }, [location]); // Se ejecuta cada vez que cambia la ubicación

  return null;
};

export default ScrollToTop;
