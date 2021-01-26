import React, { useState, useEffect } from "react";
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <pre>
              <i class="fab fa-cotton-bureau" /> INGENIO
            </pre>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/lugares-turisticos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Turismo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/restaurantes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Restaurantes
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/hoteles"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hoteles
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/joyeria"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Joyeria
              </Link>
            </li>

            <li>
              <Link
                to="/registrarse"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Iniciar Sesión</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
