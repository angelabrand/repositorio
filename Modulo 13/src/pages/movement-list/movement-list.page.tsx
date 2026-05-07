import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import { obtenerCuenta, obtenerMovimientos } from "./api";
import {
  mapearCuentaApiAVm,
  mapearListaMovimientosApiAVm,
} from "./movement-list.mapper";
import { CuentaVm, MovimientoVm } from "./movement-list.vm";
import {
  crearCuentaVacia,
  crearListaMovimientosInicial,
} from "./movement-list.mock-data";
import { TablaMovimientosComponente } from "./components";

export const MovementListPage: React.FC = () => {
  const { id = "" } = useParams();
  const [cuenta, setCuenta] = React.useState<CuentaVm>(crearCuentaVacia());
  const [listaMovimientos, setListaMovimientos] =
    React.useState<MovimientoVm[]>(crearListaMovimientosInicial());

  React.useEffect(() => {
    if (!id) {
      return;
    }

    obtenerCuenta(id).then((resultado) => setCuenta(mapearCuentaApiAVm(resultado)));
    obtenerMovimientos(id).then((resultado) =>
      setListaMovimientos(mapearListaMovimientosApiAVm(resultado))
    );
  }, [id]);

  const formatearEuros = (valor: string): string => {
    if (!valor) {
      return "";
    }

    return `${valor} €`;
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.cabeceraTitulo}>
          <h1>Saldos y Ultimos movimientos</h1>
          <div className={classes.saldoDisponible}>
            <span className={classes.saldoDisponibleEtiqueta}>SALDO DISPONIBLE</span>
            <span className={classes.saldoDisponibleCantidad}>
              {formatearEuros(cuenta.saldo)}
            </span>
          </div>
        </div>

        <div className={classes.cabeceraCuenta}>
          <p>
            <strong>Alias: {cuenta.nombre}</strong>
          </p>
          <p>
            <strong>IBAN: {cuenta.iban}</strong>
          </p>
        </div>

        <TablaMovimientosComponente listaMovimientos={listaMovimientos} />
      </div>
    </AppLayout>
  );
};
