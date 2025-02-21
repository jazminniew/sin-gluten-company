import React from "react";
import InfoSGC from "../components/infoSGC"; 
import Filter from "../components/Filter";
import "./About.css";

const About = () => {
  return (
    <div>
       <Filter />
      <InfoSGC /> 
         <img className="wsppbuisness" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwcZ02OrBCoaWBVtN_fN1rgLmzg7_j6iaSQ6Cq5oL38RAnS7yibKlWoRk89bhhYfezfo&usqp=CAU" alt="" />
    </div>
  );
};

export default About;
