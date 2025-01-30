import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./contraseña-segura";
import { ValidacionClave } from "./model";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!nombreUsuario || !clave || !commonPasswords) {
    throw new Error("no es válido");
  }
  let tieneMym = tieneMayusculasYMinusculas(clave);
  let contieneNumeros = tieneNumeros(clave);
  let tieneSimbolEsp = tieneCaracteresEspeciales(clave);
  let tieneMasDe8Caracteres = tieneLongitudMinima(clave);
  let mismoNombreUsuario = tieneNombreUsuario(clave, nombreUsuario);
  let palabrasComunes = tienePalabrasComunes(clave, commonPasswords);
  let valida: ValidacionClave;

  if (
    tieneMym.esValida &&
    contieneNumeros.esValida &&
    tieneSimbolEsp.esValida &&
    tieneMasDe8Caracteres.esValida &&
    mismoNombreUsuario.esValida &&
    palabrasComunes.esValida
  ) {
    valida = { esValida: true };
  } else {
    valida = { esValida: false };
  }
  return valida;
};
