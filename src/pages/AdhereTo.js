import React from "react";
import ContactForm from "../components/ContactForm"; 
import Filter from "../components/Filter";
import "./AdhereTo.css";

const AdhereTo = () => {
  return (
    <div>
       <Filter />
       <h1 className="AdhereToTitle">¿Querés sumar tu comercio a Sin Gluten Company?</h1>
      <ContactForm /> 
      <h2  className="AdhereToh2" >Si tenés un local o sos elaborador sin gluten, sumate a nuestra propuesta
         y dejá que todos te conozcan. Contactanos y te contamos.</h2> 
         <img className="wsppbuisness" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwcZ02OrBCoaWBVtN_fN1rgLmzg7_j6iaSQ6Cq5oL38RAnS7yibKlWoRk89bhhYfezfo&usqp=CAU" alt="" />
    </div>
  );
};

export default AdhereTo;
