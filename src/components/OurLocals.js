import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import LocalCard from "./LocalCard";
import "./OurLocals.css";

const OurLocals = () => {
  const [localsData, setLocalsData] = useState([]);

  useEffect(() => {
    fetch("/SGCDB.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const rawData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        // Filtrar y mapear datos válidos
        const mappedData = rawData
          .filter(item => item.nombreLogo)
          .map(item => ({
            name: item.nombreLogo,
            image: item.logoCircular,
            link: item.linkLogo,
          }));

        // Barajar y tomar 9 aleatorios
        const shuffled = [...mappedData].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 12);

        setLocalsData(selected);
      });
  }, []);

  return (
    <div className="component">
      <div className="our-locals">
        <div className="locals-grid">
          {localsData.map((local, index) => (
            <LocalCard
              key={index}
              name={local.name}
              image={local.image}
              link={local.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLocals;
