import React from 'react';
import "../../css/App.css";
import Navbar from "../../components/navbar/Navbar";
import Cards from '../../components/cardview/Cards';
import Portada from '../../components/portada/Portada';
import Footer from '../../components/footer/Footer';

function IniciarSesion() {
  return (
    <>
      <Navbar />
      <Portada />
      <Cards />
      <Footer />
    </>
  );
}

export default IniciarSesion;