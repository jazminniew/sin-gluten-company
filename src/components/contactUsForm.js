import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./contactUsForm.css";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false,
    message: false,
  });
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;
    let error = false;

    if (id === "name" || id === "surname") {
      formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
      error = formattedValue.trim() === "";
    }

    if (id === "email") {
      error = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    if (id === "message") {
      error = value.length < 10 || value.length > 500;
    }

    setForm({ ...form, [id]: formattedValue });
    setErrors({ ...errors, [id]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

  //como quiero que llegue el mensaje a wspp
    const whatsappNumber = "+5491156565098"; 
    const whatsappMessage = `Nuevo cliente interesado:
    - Nombre: ${form.name} ${form.surname}
    - Email: ${form.email}
    - Mensaje: ${form.message}`;

    //abrir wspp message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    Object.values(form).every((field) => field.trim() !== "");
  
      return (
        <div>
                      <h2 className="title">Contáctanos</h2>
                      <div className="title-underline-contactUs"></div>
        <div className="contact-container">
          
          <div className="contact-info">
            <h3>Contacto</h3>
            <div className="contact-item">
              <img
                src="ionicons/logo-whatsapp.svg" 
                alt="WhatsApp"
                style={{ marginRight: "10px", width: "24px", height: "24px" }}
              />
              <span>+549115656-5098</span>
            </div>
            <div className="contact-item">
              <img
                src="ionicons/mail-outline (1).svg" 
                alt="Email"
                style={{ marginRight: "10px", width: "24px", height: "24px" }}
              />
              <span>@singlutencompany</span>
            </div>
            <div className="contact-item">
              <img
                src="ionicons/logo-instagram.svg"
                alt="Teléfono"
                style={{ marginRight: "10px", width: "24px", height: "24px" }}
              />
              <span>singlutencompany@gmail.com</span>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                <TextField
                  id="name"
                  label="Nombre"
                  fullWidth
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name ? "El nombre no puede estar vacío" : ""}
                />
                <TextField
                  id="surname"
                  label="Apellido"
                  fullWidth
                  value={form.surname}
                  onChange={handleChange}
                  error={errors.surname}
                  helperText={errors.surname ? "El apellido no puede estar vacío" : ""}
                />
                <TextField
                  id="email"
                  label="Email"
                  fullWidth
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? "Ingrese un email válido" : ""}
                />
                <TextField
                  id="message"
                  label="Mensaje"
                  fullWidth
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message ? "Debe tener entre 10 y 500 caracteres" : ""}
                />
                <button type="submit" className="form-button" disabled={!isFormValid}>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      );
      
};

export default ContactUsForm;
