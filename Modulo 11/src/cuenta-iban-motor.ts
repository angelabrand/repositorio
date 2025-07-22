export const esValido = (cuenta: string): boolean => {
  const regEx =
    /^ES\d{2}(?:([ -])\d{4}\1\d{4}\1\d{2}\1\d{10}|\d{4}\d{4}\d{2}\d{10})$/;
  if (cuenta !== null && cuenta !== undefined) {
    return regEx.test(cuenta);
  }
  return false;
};

export const calcularDigitoControl = (
  entidad: string,
  oficina: string,
  cuenta: string
): string => {
  const pesosEntidadOficina = [4, 8, 5, 10, 9, 7, 3, 6];
  const pesosCuenta = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];

  const calcularUno = (digitos: string, pesos: number[]) => {
    const suma = digitos
      .split("")
      .reduce((acc, val, i) => acc + parseInt(val, 10) * pesos[i], 0);
    const resto = suma % 11;
    const dc = 11 - resto;
    return dc === 10 ? "1" : dc === 11 ? "0" : dc.toString();
  };

  const parte1 = calcularUno(entidad + oficina, pesosEntidadOficina);
  const parte2 = calcularUno(cuenta, pesosCuenta);

  return parte1 + parte2;
};
