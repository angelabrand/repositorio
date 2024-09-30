import { vi } from "vitest";
import { obtenerNumeroAleatorio } from "./modelo";
import { plantarPartidaB } from "./ui";
import { marcadorPuntuacion } from "./motor";

describe("generarNumeroAleatorio", () => {
  it("MathRandom forzado a 0 y deberia dar 0", () => {
    //Arrange
    const numeroEsperado: number = 0;
    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0);
    //Act
    const resultado = obtenerNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("MathRandom forzado a 7 y deberia dar 7", () => {
    //Arrange
    const numeroEsperado: number = 7;
    const spyOnMathRandom = vi
      .spyOn(global.Math, "random")
      .mockReturnValue(0.7);
    //Act
    const resultado: number = obtenerNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("comprobar puntuacion", () => {
  it("puntuacion es igual a 7.5", () => {
    const esperado: string = "¡Lo has clavado!";
    const numeroGenerado: number = 7.5;
    const resultado = plantarPartidaB(numeroGenerado);

    expect(resultado).toBe(esperado);
  });
});

describe("comprobar puntuacion", () => {
  it("puntuacion es igual a 7.5", () => {
    const esperado: string = "GAME OVER";
    const numeroGenerado: number = 7.7;
    const resultado = plantarPartidaB(numeroGenerado);

    expect(resultado).toBe(esperado);
  });
});
