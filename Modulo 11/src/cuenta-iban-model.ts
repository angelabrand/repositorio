import { ExtractIBANResult } from "ibantools";
import { calcularDigitoControl } from "./cuenta-iban-motor";

export const bancos = [
  { codigo: "2080", banco: "Abanca Corporación Bancaria" },
  { codigo: "0061", banco: "Banca March" },
  { codigo: "0188", banco: "Banco Alcalá" },
  { codigo: "0182", banco: "Banco Bilbao Vizcaya Argentaria" },
  { codigo: "0130", banco: "Banco Caixa Geral" },
  { codigo: "0234", banco: "Banco Caminos" },
  { codigo: "2105", banco: "Banco Castilla-La Mancha" },
  { codigo: "0240", banco: "Banco de Crédito Social Cooperativo" },
  { codigo: "0081", banco: "Banco de Sabadell" },
  { codigo: "0487", banco: "Banco Mare Nostrum" },
  { codigo: "0186", banco: "Banco Mediolanum" },
  { codigo: "0238", banco: "Banco Pastor" },
  { codigo: "0075", banco: "Banco Popular Español" },
  { codigo: "0049", banco: "Banco Santander" },
  { codigo: "3873", banco: "Banco Santander Totta" },
  { codigo: "2038", banco: "Bankia" },
  { codigo: "0128", banco: "Bankinter" },
  { codigo: "0138", banco: "Bankoa" },
  { codigo: "0152", banco: "Barclays Bank PLC" },
  { codigo: "3842", banco: "BNP Paribas Paris" },
  { codigo: "3025", banco: "Caixa de Credit del Enginyers" },
  { codigo: "2100", banco: "Caixabank" },
  { codigo: "2045", banco: "Caja de Ahorros y Monte de Piedad de Ontinyent" },
  { codigo: "3035", banco: "Caja Laboral Popular CC" },
  { codigo: "3081", banco: "Caja Rural Castilla-La Mancha" },
  { codigo: "3058", banco: "Cajamar Caja Rural" },
  { codigo: "2000", banco: "Cecabank" },
  { codigo: "1474", banco: "Citibank Europe PLC" },
  { codigo: "3821", banco: "Commerzbank AG" },
  { codigo: "3877", banco: "Danske Bank A/S" },
  { codigo: "0019", banco: "Deutsche Bank SAE" },
  { codigo: "0239", banco: "EVO Banco" },
  { codigo: "2085", banco: "Ibercaja Banco" },
  { codigo: "1465", banco: "ING Bank NV" },
  { codigo: "2095", banco: "Kutxabank" },
  { codigo: "2048", banco: "Liberbank" },
  { codigo: "0131", banco: "Novo Banco" },
  { codigo: "0073", banco: "Open Bank" },
  { codigo: "0108", banco: "Société Générale" },
  { codigo: "2103", banco: "Unicaja Banco" },
];
const buscarSucursal = (ibanResult: ExtractIBANResult) => {
  const resultado = bancos.find((b) => b.codigo === ibanResult.bankIdentifier);
  return resultado?.banco;
};

export const crearContenedorInvalido = () => {
  const contenedor = document.getElementById("datos-cuenta");
  if (contenedor === null || contenedor === undefined) return;
  contenedor.innerHTML = "";
  const infoError = document.createElement("div");
  infoError.innerHTML = "El IBAN no es válido";
  contenedor.appendChild(infoError);
};

export const crearContenedoresValido = (ibanResult: ExtractIBANResult) => {
  const contenedor = document.getElementById("datos-cuenta");
  if (contenedor === null || contenedor === undefined) return;
  contenedor.innerHTML = "";

  const dataNumeroCuenta = document.createElement("div");
  const dataCodigoSucursal = document.createElement("div");
  const dataBban = document.createElement("div");
  const dataBanco = document.createElement("div");
  const bienFormado = document.createElement("div");
  const dataIbanValido = document.createElement("div");
  let sucursal = buscarSucursal(ibanResult);
  const bban = ibanResult.bban;
  if (!bban) {
    crearContenedorInvalido();
    return;
  }
  const entidad = bban.substring(0, 4);
  const oficina = bban.substring(4, 8);
  const cuenta = bban.substring(10, 20);
  const digitoControl = calcularDigitoControl(entidad, oficina, cuenta);

  dataNumeroCuenta.innerHTML = `Dígito Control: ${digitoControl}`;
  dataCodigoSucursal.innerHTML = `Código Sucursal: ${ibanResult.branchIdentifier}`;
  dataBban.innerHTML = `Número Cuenta: ${ibanResult.bban}`;
  dataBanco.innerHTML = `Banco: ${sucursal}`;
  bienFormado.innerHTML = `El IBAN está bien formado`;
  dataIbanValido.innerHTML = `El IBAN es válido`;

  contenedor.appendChild(bienFormado);
  contenedor.appendChild(dataIbanValido);
  contenedor.appendChild(dataBanco);
  contenedor.appendChild(dataCodigoSucursal);
  contenedor.appendChild(dataNumeroCuenta);
  contenedor.appendChild(dataBban);
};
