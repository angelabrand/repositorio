import Axios from "axios";
import { CuentaApi, MovimientoApi } from "./movement-list.api-model";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL || "http://localhost:3000";

const urlCuenta = `${API_BASE_URL}/account`;
const urlMovimientos = `${API_BASE_URL}/movements`;

export const obtenerCuenta = (idCuenta: string): Promise<CuentaApi> =>
  Axios.get<CuentaApi>(`${urlCuenta}/${idCuenta}`).then(({ data }) => data);

export const obtenerMovimientos = (idCuenta: string): Promise<MovimientoApi[]> =>
  Axios.get<MovimientoApi[]>(urlMovimientos, { params: { accountId: idCuenta } }).then(
    ({ data }) => data
  );
