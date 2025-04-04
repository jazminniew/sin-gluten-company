import React from "react";
import InfoSGC from "../components/infoSGC"; 
import OurLocals from "../components/OurLocals"; 
import Suscribe from "../components/Suscribe";
import "./About.css";

const About = () => {
  return (
    <div>
      <InfoSGC />
      <h2 className="about-text">Algunos de nuestros locales</h2>
      <div className="about-section">
      <OurLocals/>
      </div>
      <Suscribe/>     
    </div>
  );
};

export default About;
