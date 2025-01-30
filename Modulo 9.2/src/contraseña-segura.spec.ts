import {
  tienePalabrasComunes,
  tieneNombreUsuario,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNumeros,
} from "./contraseña-segura";
import { commonPasswords } from "./model";

describe("tieneMayusculasYMinusculas", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneMayusculasYMinusculas(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("Debería devolver un throw si es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneMayusculasYMinusculas(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("Debería devolver un throw si la contraseña está vacia", () => {
    //Arrange
    const clave = "";

    //Act
    const result = () => tieneMayusculasYMinusculas(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("Debería devolver un false si falta una Mayuscula", () => {
    //Arrange
    const clave = "hola";

    //Act
    const result = tieneMayusculasYMinusculas(clave);

    // assert
    expect(result).toEqual({
      esValida: false,
      error: "La contraseña debe tener al menos una Minúscula y una Mayúscula",
    });
  });
  it("Debería devolver un false si falta una Minuscula", () => {
    //Arrange
    const clave = "HOLA";

    //Act
    const result = tieneMayusculasYMinusculas(clave);

    // assert
    expect(result).toEqual({
      esValida: false,
      error: "La contraseña debe tener al menos una Minúscula y una Mayúscula",
    });
  });
  it("Debería devolver un TRUE si hay una Mayúscula y Minuscula", () => {
    //Arrange
    const clave = "HolA";

    //Act
    const result = tieneMayusculasYMinusculas(clave);

    // assert
    expect(result).toEqual({
      esValida: true,
    });
  });
});

describe("tieneNumeros", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneNumeros(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("debería devolver un throw si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneNumeros(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("debería devolver un true si la contraseña tienen mayus, minus y un numero ", () => {
    //Arrange
    const clave: any = "hola3";

    //Act
    const result = tieneNumeros(clave);

    // assert
    expect(result).toEqual({ esValida: true });
  });
  it("debería devolver un false si la contraseña tienen mayus, minus y un numero ", () => {
    //Arrange
    const clave: any = "hola";

    //Act
    const result = tieneNumeros(clave);

    // assert
    expect(result).toEqual({
      esValida: false,
      error: "La contraseña debe contener almenos un número",
    });
  });
});
describe("debería devolver un false si la contraseña tienen mayus, minus y un numero ", () => {
  it("deberia de ser un throw si es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneCaracteresEspeciales(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia de ser un throw si es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneCaracteresEspeciales(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia de ser dar TRUE si tiene caracter especial", () => {
    //Arrange
    const clave: any = "hola!";

    //Act
    const result = tieneCaracteresEspeciales(clave);

    // assert
    expect(result).toEqual({ esValida: true });
  });
  it("deberia de ser devolver FALSE si no tiene caracter especial", () => {
    //Arrange
    const clave: any = "hola";

    //Act
    const result = tieneCaracteresEspeciales(clave);

    // assert
    expect(result).toEqual({
      esValida: false,
      error: "Debe contener al menons un caracter especial.",
    });
  });
});

describe("tieneLongitudMinima", () => {
  it("deberia de ser un throw si es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneLongitudMinima(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia de ser un throw si es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneLongitudMinima(clave);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia devolver true si tiene una longitud de minimo 8 caracteres", () => {
    const clave = "holahola";

    const result = tieneLongitudMinima(clave);

    expect(result).toEqual({ esValida: true });
  });
  it("deberia devolver FALSE si la longitud es menor de 8 caracteres", () => {
    const clave = "hola";

    const result = tieneLongitudMinima(clave);

    expect(result).toEqual({
      esValida: false,
      error: "Tiene que tener mínimo 8 caracteres",
    });
  });
});

describe("tieneNombreDeUsuario", () => {
  it("deberia de ser un throw si es undefined", () => {
    //Arrange
    const clave: any = undefined;
    const usuario: any = undefined;
    //Act
    const result = () => tieneNombreUsuario(clave, usuario);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia de ser un throw si es null", () => {
    //Arrange
    const clave: any = null;
    const usuario: any = null;

    //Act
    const result = () => tieneNombreUsuario(clave, usuario);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia devolver false si tiene una longitud de minimo 8 caracteres", () => {
    const clave = "Angela";
    const usuario = "Angela";

    const result = tieneNombreUsuario(clave, usuario);

    expect(result).toEqual({
      esValida: false,
      error: "Tu contraseña no puede contener tu nombre de usuario",
    });
  });
  it("deberia devolver TRUE si tiene una longitud de minimo 8 caracteres", () => {
    const clave = "hola";
    const usuario = "Angela";

    const result = tieneNombreUsuario(clave, usuario);

    expect(result).toEqual({ esValida: true });
  });
});

describe("tienePalabrasComunes", () => {
  it("deberia de ser un throw si es undefined", () => {
    //Arrange
    const clave: any = undefined;
    const commonPassword: any = undefined;
    //Act
    const result = () => tienePalabrasComunes(clave, commonPassword);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia de ser un throw si es undefined", () => {
    //Arrange
    const clave: any = null;
    const commonPassword: any = null;
    //Act
    const result = () => tienePalabrasComunes(clave, commonPassword);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
  it("deberia de ser un throw si es undefined", () => {
    //Arrange
    const clave: any = null;
    const commonPassword: any = null;
    //Act
    const result = () => tienePalabrasComunes(clave, commonPassword);

    // assert
    expect(result).toThrowError(
      "La clave no puede ser null, ni undefined, ni puede estar vacía"
    );
  });
});
describe("Validar contraseñas comunes", () => {
  it.each([
    ["password", true],
    ["12345", true],
    ["hola", false],
    ["admin123", true],
    ["Angela", false],
  ])(
    "debería devolver %p como %p en commonPasswords",
    (clave, expectedResult) => {
      const result = commonPasswords.includes(clave);
      expect(result).toBe(expectedResult);
    }
  );
});
