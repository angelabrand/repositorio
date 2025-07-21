// Queremos poder leer IBAN con espacios, sin espacios, o guiones, por ejemplo:

// ES2114650100722030876293

// Valida que un IBAN este bien formado.

//mi expresion regular: /^(ES\d{2}(\-|\s)?\d{4}(\-|\s)?\d{4}(\-|\s)?\d{2}(\-|\s)?\d{10})|(ES\d{2}\d{4}\d{4}\d{2}\d{10})$/

import { extractIBAN, ExtractIBANResult } from "ibantools";

const printInput = () => {
  const inputBuscador = document.getElementById("search");
  if (
    inputBuscador !== null &&
    inputBuscador !== undefined &&
    inputBuscador instanceof HTMLInputElement
  ) {
    const pintarInput = inputBuscador.value;
    const numeroCuenta = document.getElementById("numero-cuenta");
    if (numeroCuenta !== null && numeroCuenta instanceof HTMLDivElement) {
      numeroCuenta.innerHTML = pintarInput;
    }
    let ibanResult: ExtractIBANResult = esValido(inputBuscador.value);
    console.log(ibanResult);
  }
};

const esValido = (cuenta: string): ExtractIBANResult => {
  const regEx =
    /^ES\d{2}(?:([ -])\d{4}\1\d{4}\1\d{2}\1\d{10}|\d{4}\d{4}\d{2}\d{10})$/;
  if (cuenta !== null && cuenta !== undefined) {
    if (regEx.test(cuenta) === true) {
      let ibanResult = extractIBAN(cuenta);
      // ibanResult = mapearBanco(ibanResult)
      return ibanResult;
    }
  }
  return extractIBAN(cuenta);
};

/*si es válido
1- print numero de cuenta
2- identificador de banco
3- 
*/

//console.log(ibantools.extractIBAN("ES6621000418401234567891"));

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
