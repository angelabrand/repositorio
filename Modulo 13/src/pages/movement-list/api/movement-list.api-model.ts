export interface CuentaApi {
  id: string;
  iban: string;
  name: string;
  balance: number;
}

export interface MovimientoApi {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: string;
  realTransaction: string;
  accountId: string;
}
