export interface FormularioCuenta {
  tipo: string;
  alias: string;
}

export const crearFormularioCuentaVacio = (): FormularioCuenta => ({
  tipo: "",
  alias: "",
});

export interface ErroresFormularioCuenta {
  tipo: string;
  alias: string;
}

export const crearErroresFormularioCuentaVacios =
  (): ErroresFormularioCuenta => ({
    tipo: "",
    alias: "",
  });
