import { ValidacionClave } from "./model";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  }
  const Mayuscula = /[A-Z]/.test(clave);
  const Minuscula = /[a-z]/.test(clave);

  if (Mayuscula && Minuscula) {
    return { esValida: true };
  } else
    return {
      esValida: false,
      error: "La contraseña debe tener al menos una Minúscula y una Mayúscula",
    };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  }

  const tieneNumeros = /\d/.test(clave); // /\d/ para los numeros
  if (tieneNumeros) {
    return { esValida: true };
  } else
    return {
      esValida: false,
      error: "La contraseña debe contener almenos un número",
    };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  }
  const caracteresEspeciales = /[^a-zA-Z0-9]/.test(clave);
  if (caracteresEspeciales) {
    return { esValida: true };
  } else
    return {
      esValida: false,
      error: "Debe contener al menons un caracter especial.",
    };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  }
  if (clave.length >= 8) {
    return { esValida: true };
  } else
    return { esValida: false, error: "Tiene que tener mínimo 8 caracteres" };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  }
  if (clave === nombreUsuario) {
    return {
      esValida: false,
      error: "Tu contraseña no puede contener tu nombre de usuario",
    };
  } else return { esValida: true };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  }
  const contraseñaComun = commonPasswords.some(
    (commonPasswords) => commonPasswords === clave
  );
  if (contraseñaComun) {
    return { esValida: false, error: "contraseña demasiado comun" };
  } else
    return {
      esValida: true,
    };
};
