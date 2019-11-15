import React, { Component } from "react";
import "./bootstrap.min.css";

import Header from "./components/Header";
import NuevoArma from "./components/NuevoArma";
import ListadoArmas from "./components/ListadoArmas";

class App extends Component {
  state = {
    armas: []
  };

  //! Cuando la aplicacion se carga
  componentDidMount() {
    const armasLS = localStorage.getItem("armas");
    if (armasLS) {
      this.setState({ armas: JSON.parse(armasLS) });
    }
  }

  //! Cuando eliminamos o agregamos una nueva arma
  componentDidUpdate() {
    localStorage.setItem("armas", JSON.stringify(this.state.armas));
  }

  crearNuevoArma = datos => {
    //console.log(datos);
    //copiar el state actual
    const armas = [...this.state.armas, datos];

    // agregar el nuevo state
    this.setState({
      armas
    });
  };

  //! Elimina las armas del state

  eliminarArma = id => {
    // console.log(id);
    //! tomar una copia del state
    const armasActuales = [...this.state.armas];
    const armas = armasActuales.filter(arma => arma.id !== id);

    this.setState({ armas });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador  de Armas del Ejército" />
        <NuevoArma crearNuevoArma={this.crearNuevoArma} />

        <ListadoArmas
          armas={this.state.armas}
          eliminarArma={this.eliminarArma}
        />
      </div>
    );
  }
}

export default App;
