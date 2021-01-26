import React from "react";
import { Button } from "../../components/buttons/Button";
import noencontrado from "../../images/platillo.svg";
const NoEncontrado = () => (
  //Fragment
  <>
    {/* Mensaje cuando llegue a página incorrecta */}
    <div className="error-404">
      <div className="svg">
        <img src={noencontrado} alt="Pagina No Encontrada" />
      </div>
      <h1>Pagina No Encontrada</h1>
      <h2>Error 404</h2>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Regresar
        </Button>
      </div>
    </div>
  </>
);
export default NoEncontrado;
