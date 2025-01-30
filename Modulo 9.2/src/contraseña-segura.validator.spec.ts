import { commonPasswords } from "./model";
import { validarClave } from "./constraseña-segura.validator";

describe("validaClave", () => {
  it.each([
    ["Angela", "Gmsi12.-", true],
    ["Angela", "Angela", false],
    ["Angela", "ho-l22ay", false],
    ["Angela", "12345", false],
    ["Angela", "admin123", false],
    ["Angela", "wrongpass", false],
  ])(
    "debería devolver %p como %p para %p",
    (nombreUsuario, clave, expectedResult) => {
      const result = validarClave(nombreUsuario, clave, commonPasswords);

      expect(result.esValida).toBe(expectedResult);
    }
  );
});
