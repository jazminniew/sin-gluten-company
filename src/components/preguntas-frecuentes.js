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
      answer: "Somos una empresa  dedicada, y en beneficio de la comunidad celíaca  y a todo aquel que consuma alimentos libre de gluten. Sabemos que los productos sin Gluten tienen un alto precio, por eso creamos La primera tarjeta que beneficia económicamente a la comunidad celíaca.",
      icon: <Building className="icon" />,
    },
    {
      id: "item-2",
      question: "¿En qué me beneficia?",
      answer: "Vas a tener acceso a muchísimos descuentos en una amplia lista de lugares adheridos tanto de manera presencial como online. Los lugares adheridos podes verlos en nuestro Instagram, ya sea en nuestro mapa, lista de lugares adheridos y posteos",
      icon: <ThumbsUp className="icon" />,
    },
    {
      id: "item-3",
      question: "¿Cuánto sale?",
      answer: "La suscripción tiene un valor de $3200 por mes. En el caso de grupo familiar directo, ofrecemos un descuento por adicional del 50%.",
      icon: <DollarSign className="icon" />,
    },
    {
      id: "item-4",
      question: "¿Por qué me conviente tenerla?",
      answer: "Porque enseguida comenzás a ahorrar muchísimo más de lo que te salió la compra. Hace tus cálculos y comprobalo!",
      icon: <Award className="icon" />,
    },
    {
      id: "item-5",
      question: "¿Cómo Funciona?",
      answer: "En el momento de la compra sólo tenés que presentar tu DNI junto a la tarjeta digital vigente para que sea validado por el comerciante y te efectúe el descuento. Para las compras ONLINE te enviaremos un código de descuento. Recordà que la tarjeta actuará como medio para alcanzar el descuento o beneficio, no se trata de una tarjeta de compra, ni débito, ni crédito. ",
      icon: <HelpCircle className="icon" />,
    },
    {
      id: "item-6",
      question: "¿Cómo obtengo mi tarjeta? ¿La tarjeta es de uso personal?",
      answer: "Ingresá en nuestro Instagram, al Linktree, “Quiero pagar mi tarjeta” y te direccionará al link para adherirte a la suscripción mensual, a través de una plataforma de cobro segura, o envíanos un WhatsApp y te lo pasamos. La tarjeta es de uso personal e intransferible.",
      icon: <CreditCard className="icon" />,
    },
    {
      id: "item-7",
      question: "¿Cuántos descuentos puedo usar por mes?",
      answer: "El uso es ilimitado, podes usar la tarjeta todas las veces que quieras.",
      icon: <Calendar className="icon" />,
    },
    {
      id: "item-8",
      question: "¿Me puedo dar de baja en cualquiler momento?",
      answer: "Si, no hay un tiempo mínimo. Sólo es importante dar aviso 3 días antes de la fecha de cobro para que no se impute ese cobro. ",
      icon: <Power className="icon" />,
    },
    {
      id: "item-9",
      question: "¿Es solamente para celíacos? ¿Tengo que mostrar algún certificado?",
      answer: " La tarjeta es para todas las personas que quieran obtener los beneficios, más allá de su condición, no es necesario presentar ningún certificado.",
      icon: <Users className="icon" />,
    },
    {
      id: "item-10",
      question: "¿Puedo solicitar la tarjeta a nombre de otra persona o regalarla?",
      answer: "Claro que si! Es un excelente regalo. La tarjeta se emitirá con los datos del beneficiario.",
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
