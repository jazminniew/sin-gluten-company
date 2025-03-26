"use client"

import { useState } from "react"
import {
  Building,
  ThumbsUp,
  DollarSign,
  Award,
  HelpCircle,
  CreditCard,
  Calendar,
  Power,
  Users,
  Gift,
  ChevronDown,
} from "lucide-react"
import "./preguntas-frecuentes.css"

export default function PreguntasFrecuentes() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [openItem, setOpenItem] = useState(null)

  const faqItems = [
    {
      id: "item-1",
      question: "¿Qué es Sin Gluten Company?",
      answer: "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hs.",
      icon: <Building className="icon" />,
    },
    {
      id: "item-2",
      question: "¿En qué me beneficia?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <ThumbsUp className="icon" />,
    },
    {
      id: "item-3",
      question: "¿Cuánto sale?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <DollarSign className="icon" />,
    },
    {
      id: "item-4",
      question: "¿Por qué me conviente tenerla?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <Award className="icon" />,
    },
    {
      id: "item-5",
      question: "¿Cómo Funciona?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <HelpCircle className="icon" />,
    },
    {
      id: "item-6",
      question: "¿Cómo obtengo mi tarjeta? ¿La tarjeta es de uso personal?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <CreditCard className="icon" />,
    },
    {
      id: "item-7",
      question: "¿Cuántos descuentos puedo usar por mes?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <Calendar className="icon" />,
    },
    {
      id: "item-8",
      question: "¿Me puedo dar de baja en cualquiler momento?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <Power className="icon" />,
    },
    {
      id: "item-9",
      question: "¿Es solamente para celíacos? ¿Tengo que mostrar algún certificado?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <Users className="icon" />,
    },
    {
      id: "item-10",
      question: "¿Puedo solicitar la tarjeta a nombre de otra persona o regalarla?",
      answer: "Sí, hacemos envíos a todo el país a través de diferentes transportes.",
      icon: <Gift className="icon" />,
    },
  ]

  const toggleAccordion = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId)
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Preguntas Frecuentes</h1>
        <div className="title-underline-faq"></div>
      </div>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div
            key={item.id}
            className="faq-item"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`accordion-item ${hoveredItem === item.id ? "hovered" : ""}`}>
              <div className="accordion-trigger" onClick={() => toggleAccordion(item.id)}>
                <div className="trigger-content">
                  <div className={`icon-container ${hoveredItem === item.id ? "hovered" : ""}`}>{item.icon}</div>
                  <span className={`question-text ${hoveredItem === item.id ? "hovered" : ""}`}>{item.question}</span>
                </div>
                <ChevronDown className={`chevron-icon ${openItem === item.id ? "rotated" : ""}`} />
              </div>
              <div className={`accordion-content ${openItem === item.id ? "active" : ""}`}>
                <div className="answer-text">{item.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
