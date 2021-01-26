import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from "../pages/Reports";
import Team from "../pages/Team";
import Sidebar from "../components/sidebar/Sidebar";
import Perfil from "../pages/perfil/Perfil";
function Inicio() {
  return (
    <Router>
         <Switch>
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/team" exact component={Team} />
        </Switch>
        </Router>
  );
}

export default Inicio;

