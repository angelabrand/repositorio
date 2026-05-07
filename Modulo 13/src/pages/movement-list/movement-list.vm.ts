export interface CuentaVm {
  id: string;
  iban: string;
  nombre: string;
  saldo: string;
}

export interface MovimientoVm {
  id: string;
  descripcion: string;
  importe: string;
  saldo: string;
  fechaOperacion: Date;
  fechaValor: Date;
}
