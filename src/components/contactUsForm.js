import React, { useState } from "react";
import "./contactUsForm.css";
import { TextField } from "@mui/material";

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

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { id, value } = e.target;

    let formattedValue = value;
    let error = false;

    if (id === "name" || id === "surname") {
      formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
      error = formattedValue.trim() === "";
    }

    if (id === "email") {
      error = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Validación de email
    }

    if (id === "message") {
      error = value.length < 10 || value.length > 500;
    }

    setForm({ ...form, [id]: formattedValue });
    setErrors({ ...errors, [id]: error });
  };

  // Verificar si el formulario es válido
  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    Object.values(form).every((field) => field.trim() !== "");

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <div className="contact-item">
        <ion-icon name="logo-whatsapp"></ion-icon>
          <span>+549115656-5098</span>
        </div>
        <div className="contact-item">
        <ion-icon name="logo-instagram"></ion-icon>
          <span>@singlutencompany</span>
        </div>
        <div className="contact-item">
        <ion-icon name="mail-outline"></ion-icon>
          <span>singlutencompany@gmail.com</span>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contáctanos</h2>
        <form>
          <div className="input-group">
            <TextField
              className="form-input"
              id="name"
              label="Nombre"
              variant="outlined"
              fullWidth
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name ? "El nombre no puede estar vacío" : ""}
            />

            <TextField
              className="form-input"
              id="surname"
              label="Apellido"
              variant="outlined"
              fullWidth
              value={form.surname}
              onChange={handleChange}
              error={errors.surname}
              helperText={errors.surname ? "El apellido no puede estar vacío" : ""}
            />
          </div>

          <TextField
            className="form-input"
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Ingrese un email válido" : ""}
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

          <button type="submit" className="form-button" disabled={!isFormValid}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
