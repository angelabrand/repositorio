import React from "react";
import { MovimientoVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { FilaMovimientoComponente } from "./movement-list-item.component";

interface Propiedades {
  listaMovimientos: MovimientoVm[];
}

export const TablaMovimientosComponente: React.FC<Propiedades> = (props) => {
  const { listaMovimientos } = props;

  return (
    <div className={classes.gridContainer}>
      <div className={classes.headerTable}>
        <span className={classes.headerCell}>FECHA</span>
        <span className={classes.headerCell}>FECHA VALOR</span>
        <span className={classes.headerCell}>DESCRIPCION</span>
        <span className={classes.headerCell}>IMPORTE</span>
        <span className={classes.headerCell}>SALDO DISPONIBLE</span>
      </div>

      {listaMovimientos.map((movimiento) => (
        <FilaMovimientoComponente key={movimiento.id} movimiento={movimiento} />
      ))}
    </div>
  );
};
