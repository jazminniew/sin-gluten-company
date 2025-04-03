import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    instagram: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    whatsapp: false,
    message: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;
    let error = false;

    //validar el form
    if (id === "name") {
      formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
      error = formattedValue.trim() === "";
    }

    if (id === "whatsapp") {
      error = !/^\d{10,15}$/.test(value);
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

    const whatsappNumber = "+5491164386972"; 
    //como quiero que el mensaje llegue a wspp
    const whatsappMessage = `Nuevo proveedor interesado:
    - Nombre del Local: ${form.name}
    - WhatsApp: ${form.whatsapp}
    - Instagram: ${form.instagram || "No especificado"}
    - Mensaje: ${form.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    Object.values(form).every((field) => field.trim() !== "");

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <TextField id="name" label="Nombre del Local" fullWidth value={form.name} onChange={handleChange} error={errors.name} helperText={errors.name ? "El nombre no puede estar vacío" : ""} />
        <TextField id="whatsapp" label="Teléfono" fullWidth value={form.whatsapp} onChange={handleChange} error={errors.whatsapp} helperText={errors.whatsapp ? "Debe ser un número entre 10 y 15 dígitos" : ""} />
        <TextField id="instagram" label="Instagram" fullWidth value={form.instagram} onChange={handleChange} />
        <TextField id="message" label="Mensaje" fullWidth multiline rows={4} value={form.message} onChange={handleChange} error={errors.message} helperText={errors.message ? "Debe tener entre 10 y 500 caracteres" : ""} />
        <button type="submit" className="form-button" disabled={!isFormValid}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
