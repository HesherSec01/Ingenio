import React from "react";
import Inicio from "../pages/inicio/Inicio"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Turismo from "../pages/turismo/Turismo";
import Restaurantes from "../pages/restaurantes/Restaurantes";
import Hoteles from "../pages/hoteles/Hoteles";
import Joyeria from "../pages/joyeria/Joyeria";
import NoEncontrado from "../pages/noencontrado/NoEncontrado";
import Registrarse from "../pages/registrarse/Registrarse";
import IniciarSesion from "../pages/iniciarsesion/IniciarSesion";
import {
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from "../pages/Reports";
import Perfil from "../pages/perfil/Perfil";

const Routes = () => {
  return (
    <Router>
         <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/inicio" exact component={Inicio} />
        <Route path="/turismo" component={Turismo} />
        <Route path="/restaurantes" component={Restaurantes} />
        <Route path="/hoteles" component={Hoteles} />
        <Route path="/joyeria" component={Joyeria} />
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/iniciar-sesion" component={IniciarSesion} />
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route component={NoEncontrado} />
        </Switch>

      
    </Router>
  );
};
export default Routes;
