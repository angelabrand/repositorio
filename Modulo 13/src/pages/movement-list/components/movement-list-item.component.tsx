import React from "react";
import { MovimientoVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Propiedades {
  movimiento: MovimientoVm;
}

export const FilaMovimientoComponente: React.FC<Propiedades> = (props) => {
  const { movimiento } = props;
  const importeEsNegativo = Number(movimiento.importe) < 0;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movimiento.fechaOperacion.toLocaleDateString("es-ES")}
      </span>
      <span className={classes.dataCell}>
        {movimiento.fechaValor.toLocaleDateString("es-ES")}
      </span>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        {movimiento.descripcion}
      </span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          importeEsNegativo ? classes.negativo : ""
        }`}
      >
        {movimiento.importe} €
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movimiento.saldo} €
      </span>
    </div>
  );
};
