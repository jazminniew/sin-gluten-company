import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Filter from "../components/Filter";
import CardList from "../components/CardList";
import Suscribe from "../components/Suscribe";

export default function Category() {
  const { category } = useParams();

  const filterRef = useRef(null);

  useEffect(() => {
    // 2️⃣ Cuando se monta, hacemos scroll justo después del filtro
    if (filterRef.current) {
      // Desplaza la ventana justo debajo del filtro
      const offset = filterRef.current.offsetHeight;
      window.scrollTo({
        top: filterRef.current.offsetTop + offset,
        behavior: "smooth",
      });
    }
  }, [category]); // 🔑 Se ejecuta cada vez que cambia la categoría


  return (
    <div>
<div
        ref={filterRef} // 🔑 Asigna el ref aquí
        style={{
          backgroundColor: "rgb(0, 169, 181)",
          padding: "20px",
          margin: "20px 40px",
          borderRadius: "16px",
        }}
      >
        <Filter />
      </div>
      <CardList category={category} />
      <Suscribe />
    </div>
  );
}

