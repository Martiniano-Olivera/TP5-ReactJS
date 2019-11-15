import React, { Component } from "react";
import uuid from "uuid";

const stateInicial = {
  arma: {
    soldado: "",
    rango: "",
    fecha: "",
    hora: "",
    motivoFalla: ""
  },
  error: false
};

class NuevoArma extends Component {
  state = {
    ...stateInicial
  };

  handleChange = e => {
    // colocar lo que el usuario escribe en el state
    this.setState({
      arma: {
        ...this.state.arma,
        [e.target.name]: e.target.value
      }
    });
  };
  // cuando el usuario envia el formulario
  handleSubmit = e => {
    e.preventDefault();

    //extraer los valores del state
    const { soldado, rango, fecha, hora, motivoFalla } = this.state.arma;

    //validar que todos los campos esten llenos
    if (
      soldado === "" ||
      rango === "" ||
      fecha === "" ||
      hora === "" ||
      motivoFalla === ""
    ) {
      this.setState({
        error: true
      });

      // detener la ejecucion
      return;
    }

    // generar objeto cons los datos
    const nuevoArma = {
      ...this.state.arma
    };
    nuevoArma.id = uuid();

    // agragar el arma al state de App
    this.props.crearNuevoArma(nuevoArma);

    //colocar en el state el stateInicial
    this.setState({
      ...stateInicial
    });
  };

  render() {
    /// extrar valor del state
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llene el formulario para detallar qué arma falló y cómo.{" "}
          </h2>{" "}
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios{" "}
            </div>
          ) : null}{" "}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre de soldado{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre soldado"
                  name="soldado"
                  onChange={this.handleChange}
                  value={this.state.arma.soldado}
                />{" "}
              </div>{" "}
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Rango del soldado.{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rango soldado."
                  name="rango"
                  onChange={this.handleChange}
                  value={this.state.arma.rango}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                {" "}
                Fecha{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.arma.fecha}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label"> Hora </label>{" "}
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.arma.hora}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/*form-group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Motivo de la falla{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Ingrese que fue lo que falló"
                  name="motivoFalla"
                  onChange={this.handleChange}
                  value={this.state.arma.motivoFalla}
                />{" "}
              </div>{" "}
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nuevo arma"
            />
          </form>{" "}
          {/*form-group */}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default NuevoArma;
