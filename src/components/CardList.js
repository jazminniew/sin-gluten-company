import React, { useState } from "react";
import Card from "./Card";
import Select from "./Select";
import "./CardList.css";

const products = [
  { image: "https://via.placeholder.com/300", title: "Producto 1", description: "Descuento 15% en este artículo", category: "Provincia" },
  { image: "https://via.placeholder.com/300", title: "Producto 2", description: "Oferta especial por tiempo limitado", category: "Localidad" },
  { image: "https://via.placeholder.com/300", title: "Producto 3", description: "Aprovecha el 10% de descuento", category: "Día de Beneficio" },
  { image: "https://via.placeholder.com/300", title: "Producto 4", description: "Descuento 20% en productos seleccionados", category: "Forma de Venta" },
  { image: "https://via.placeholder.com/300", title: "Producto 5", description: "Compra 2 y llévate 1 gratis", category: "Provincia" },
];

//los productos son filtrados desde select.js
const CardList = ({ filterTitle }) => { 
  const [filters, setFilters] = useState([]);

  const filteredProducts = filters.length === 0 
    ? products 
    : products.filter(product => filters.includes(product.category));

  return (
    <div>
      <Select title={filterTitle} onFilterChange={setFilters} /> 
      <div className="card-list">
        {filteredProducts.map((product, index) => (
          <Card key={index} image={product.image} title={product.title} description={product.description} />
        ))}
      </div>
    </div>
  );
};


export default CardList;
