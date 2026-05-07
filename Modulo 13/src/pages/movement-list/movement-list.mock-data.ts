import { CuentaVm, MovimientoVm } from "./movement-list.vm";

export const crearCuentaVacia = (): CuentaVm => ({
  id: "",
  iban: "",
  nombre: "",
  saldo: "",
});

export const crearListaMovimientosInicial = (): MovimientoVm[] => [];
