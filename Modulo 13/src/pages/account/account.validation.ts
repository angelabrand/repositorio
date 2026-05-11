import {
  ErroresFormularioCuenta,
  FormularioCuenta,
  crearErroresFormularioCuentaVacios,
} from "./account.vm";

interface ResultadoValidacion {
  esValido: boolean;
  errores: ErroresFormularioCuenta;
}

export const validarFormularioCuenta = (
  formulario: FormularioCuenta
): ResultadoValidacion => {
  let resultado: ResultadoValidacion = {
    esValido: true,
    errores: crearErroresFormularioCuentaVacios(),
  };

  if (!formulario.tipo) {
    resultado = {
      ...resultado,
      esValido: false,
      errores: {
        ...resultado.errores,
        tipo: "Debe elegir un tipo de cuenta",
      },
    };
  }

  if (!formulario.alias.trim()) {
    resultado = {
      ...resultado,
      esValido: false,
      errores: {
        ...resultado.errores,
        alias: "Debe introducir un alias",
      },
    };
  }

  return resultado;
};
