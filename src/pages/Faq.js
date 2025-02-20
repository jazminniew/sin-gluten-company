import React from "react";
import Suscribe from "../components/Suscribe"; 
import FreqQuest from "../components/FreqQuest";
import Filter from "../components/Filter";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
         <Filter/>
      <h1 className="titleFAQ">Preguntas Frecuentes</h1>
      
      <div className="background">
      <FreqQuest 
        question="¿Qué es Sin Gluten Company?" 
        answer="Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hs." 
      />
      
      <FreqQuest 
        question="¿En qué me beneficia?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿En qué me beneficia?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿Cuánto sale?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question=" ¿Por qué me conviente tenerla?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿Cómo Funciona?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿Cómo obtengo mi tarjeta? ¿La tarjeta es de uso personal?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿Cuántos descuentos puedo usar por mes?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿Me puedo dar de baja en cualquiler momento?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿Es solamente para celíacos? ¿Tengo que mostrar algún certificado?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />

<FreqQuest 
        question="¿Puedo solicitar la tarjeta a nombre de otra persona o regalarla?" 
        answer="Sí, hacemos envíos a todo el país a través de diferentes transportes." 
      />
      </div>




      <Suscribe/>
    </div>
  );
};

export default Faq; // 👈 Asegúrate de que se exporta Faq (NO FAQ)
