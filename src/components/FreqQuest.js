import React, { useState } from "react";
import "./FreqQuest.css";

const FreqQuest = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="freq-quest" onClick={() => setIsOpen(!isOpen)}>
      <div className="question">
        <span>{question}</span>
        <span className={`arrow ${isOpen ? "rotated" : ""}`}>
          {isOpen ? <ion-icon name="chevron-up-outline"></ion-icon>: <ion-icon name="chevron-down-outline"></ion-icon>}
        </span>
      </div>
      <div className={`answer ${isOpen ? "open" : ""}`}>{answer}</div>
    </div>
  );
};

export default FreqQuest;
