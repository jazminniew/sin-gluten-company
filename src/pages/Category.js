import React from "react";
import { useParams } from "react-router-dom";
import Filter from "../components/Filter";
import CardList from "../components/CardList";
import Suscribe from "../components/Suscribe";

export default function Category() {
  const { category } = useParams();

  return (
    <div>
      <Filter />
      <CardList category={category} />
      <Suscribe />
    </div>
  );
}
