import React from "react";

const Arma = ({ arma, eliminarArma }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{arma.nombreArma}</h3>
      <p className="card-text">
        <span>Nombre del dueño</span> {arma.soldado}
      </p>
      <p className="card-text">
        <span>Rango del soldado</span> {arma.rango}
      </p>
      <p>
        <span>Fecha</span> {arma.fecha}
      </p>
      <p>
        <span>Hora</span> {arma.hora}
      </p>
      <p>
        <span></span> {arma.motivoFalla}
      </p>

      <button className="btn btn-danger" onClick={() => eliminarArma(arma.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Arma;
