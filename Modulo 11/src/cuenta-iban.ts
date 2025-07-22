import { extractIBAN, ExtractIBANResult } from "ibantools";
import {
  crearContenedorInvalido,
  crearContenedoresValido,
} from "./cuenta-iban-model";
import { esValido } from "./cuenta-iban-motor";

const printInput = () => {
  const inputBuscador = document.getElementById("search");
  if (
    inputBuscador !== null &&
    inputBuscador !== undefined &&
    inputBuscador instanceof HTMLInputElement
  ) {
    const numeroCuenta = document.getElementById("datos-cuenta");
    if (numeroCuenta !== null && numeroCuenta instanceof HTMLDivElement) {
      let valido = esValido(inputBuscador.value);
      if (valido) {
        let cuenta = inputBuscador.value.replace(/[-\s]/g, "");
        let ibanResult: ExtractIBANResult = extractIBAN(cuenta);
        crearContenedoresValido(ibanResult);
      } else {
        crearContenedorInvalido();
      }
    }
  }
};

const btnBuscar = () => {
  const btnClick = document.getElementById("btn-filtro");

  if (
    btnClick != null &&
    btnClick !== undefined &&
    btnClick instanceof HTMLButtonElement
  ) {
    btnClick.addEventListener("click", printInput);
  }
};

btnBuscar();
