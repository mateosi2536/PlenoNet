import { useState } from "react";
import "../style.css";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (API, correo, etc.)
    console.log(form);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-title-cont">
        <h2 className="contact-form-title">Contáctanos</h2>
      </div>
      <div className="form-div-up">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="phone"
          placeholder="Tu número de contacto"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Tu dirección o sector (opcional)"
          value={form.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-div-down">
        <textarea
          name="message"
          placeholder="¿Qué necesitas?"
          value={form.message}
          onChange={handleChange}
          required
        />

        <label htmlFor="plan">Selecciona un plan:</label>
        <select name="plan" id="plan">
          <option value="">-- Elige un plan --</option>
          <option value="basico">Plan Básico - 300Mbps</option>
          <option value="intermedio">Plan Completo - 500Mbps</option>
          <option value="avanzado">Plan Pleno - 800Mbps</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
