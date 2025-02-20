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

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { id, value } = e.target;

    let formattedValue = value;
    let error = false;

    // Validaciones
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

  // Verificar si el formulario es válido
  const isFormValid = Object.values(errors).every((error) => !error) && 
                      Object.values(form).every((field) => field.trim() !== "");

  return (
    <div className="form-container">
      <form className="form">
        <TextField
          className="form-input"
          id="name"
          label="Nombre del Local"
          variant="outlined"
          fullWidth
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? "El nombre no puede estar vacío" : ""}
        />

        <TextField
          className="form-input"
          id="whatsapp"
          label="WhatsApp"
          variant="outlined"
          fullWidth
          value={form.whatsapp}
          onChange={handleChange}
          error={errors.whatsapp}
          helperText={errors.whatsapp ? "Debe ser un número entre 10 y 15 dígitos" : ""}
        />

        <TextField
          className="form-input"
          id="instagram"
          label="Instagram"
          variant="outlined"
          fullWidth
          value={form.instagram}
          onChange={handleChange}
        />

        <TextField
          className="form-input"
          id="message"
          label="Mensaje"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={form.message}
          onChange={handleChange}
          error={errors.message}
          helperText={errors.message ? "Debe tener entre 10 y 500 caracteres" : ""}
        />

        <button
          className="form-button"
          disabled={!isFormValid}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
