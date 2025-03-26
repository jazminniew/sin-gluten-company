import React from "react";
import Suscribe from "../components/Suscribe"; 
import FreqQuest from "../components/FreqQuest";
import Filter from "../components/Filter";
import "./Faq.css";
import Preguntas from "../components/preguntas-frecuentes"

const Faq = () => {
  return (
    <div>
         <Filter/>
    <Preguntas/>
      <Suscribe/>
    </div>
  );
};

export default Faq; 
