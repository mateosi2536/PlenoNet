import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="logo">PlenoNet</h3>

      <div className="contact-bar">
        <p>📍 Manta, Ecuador</p>
        <p>📞 098 829 4495</p>
        <p>📧 contacto@plenonet.com</p>
      </div>

      <div className="social-bar">
        <a href="https://facebook.com" target="_blank">
          🌐 Facebook
        </a>
        <br />
        <a href="https://instagram.com" target="_blank">
          📸 Instagram
        </a>
        <br />
        <a href="https://wa.me/59398894495" target="_blank">
          💬 WhatsApp
        </a>
      </div>

      <div className="terms-bar">
        <Link to="/" className="link">
          Términos y Condiciones
        </Link>
        <Link to="/" className="link">
          Política de Privacidad
        </Link>
        <Link to="/" className="link">
          Política de Experiencia
        </Link>
        <Link to="/" className="link">
          Repositorio Arcotel
        </Link>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} PlenoNet. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
