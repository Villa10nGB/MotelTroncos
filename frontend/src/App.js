import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from "./components/Navigation";
import CrearProducto from "./components/CrearProducto";
import Habitaciones from "./components/Habitaciones"
import Inventario from "./components/Inventario";
import BuscarProducto from "./components/BuscarProducto";

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/Habitaciones" exact component = {Habitaciones}/>
        <Route path="/CrearProducto" exact component = {CrearProducto}/>
        <Route path="/Inventario" exact component = {Inventario}/>
        <Route path="/BuscarProducto" exact component = {BuscarProducto}/>
      </div>
    </Router>
  );
}
export default App;