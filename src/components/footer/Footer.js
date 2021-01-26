import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Únase al boletín de Aventuras para recibir nuestras mejores ofertas de
          vacaciones
        </p>
        <p className="footer-subscription-text">
          Puede darse de baja en cualquier momento.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Su correo"
              required
            />
            <button type="submit" className="btn--outline">
              SUSCRIBIRME
            </button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre Nosotros</h2>
            <Link to="/">Como Funciona</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Carreras</Link>
            <Link to="/">Inversores</Link>
            <Link to="/">Condiciones de servicio</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contáctenos</h2>
            <Link to="/">Contacto</Link>
            <Link to="/">Asistencia</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Patrocinios</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Enviar Video</Link>
            <Link to="/"> Embajadores </Link>
            <Link to="/"> Agencia </Link>
            <Link to="/"> Influencer </Link>
          </div>
          <div className="footer-link-items">
            <h2>Nuestras Redes</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              INGENIO <i className="fab fa-cotton-bureau" />
            </Link>
          </div>
          <small className="website-rights">Powerd By ALIEN TEAM © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.facebook.com/"
            >
              {" "}
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.facebook.com/"
            >
              {" "}
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.facebook.com/"
            >
              {" "}
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.facebook.com/"
            >
              {" "}
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.facebook.com/"
            >
              {" "}
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
