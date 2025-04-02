import React from "react";
import { useParams } from "react-router-dom";
import Filter from "../components/Filter";
import CardList from "../components/CardList";
import Suscribe from "../components/Suscribe";

export default function Category() {
  const { category } = useParams();

  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 169, 181)", padding: "20px", margin:"20px 40px", borderRadius: "16px"}}>
        <Filter />
      </div>
      <CardList category={category} />
      <Suscribe />
    </div>
  );
}

