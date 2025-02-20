import React from "react";
import Filter from "../components/Filter";
import CardList from "../components/CardList";
import Suscribe from "../components/Suscribe";
import Select from "../components/Select";

export default function Category() {
  return (
    <div>
      <Filter />
      <CardList />
      <Suscribe />
    </div>
  );
}
