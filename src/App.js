import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import Consultar from "./pages/Consultar";
import Editar from "./pages/Editar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/List" component={Consultar} />
          <Route path="/Edit/:id" component={Editar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
