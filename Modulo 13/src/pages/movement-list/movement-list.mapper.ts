import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapearCuentaApiAVm = (
  cuenta: apiModel.CuentaApi
): viewModel.CuentaVm => ({
  id: cuenta.id,
  iban: cuenta.iban,
  nombre: cuenta.name,
  saldo: cuenta.balance.toString(),
});

export const mapearListaMovimientosApiAVm = (
  movimientos: apiModel.MovimientoApi[]
): viewModel.MovimientoVm[] =>
  movimientos.map((movimiento) => ({
    id: movimiento.id,
    descripcion: movimiento.description,
    importe: movimiento.amount.toString(),
    saldo: movimiento.balance.toString(),
    fechaOperacion: new Date(movimiento.transaction),
    fechaValor: new Date(movimiento.realTransaction),
  }));
