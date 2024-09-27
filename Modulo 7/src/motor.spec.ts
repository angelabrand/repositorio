import { vi } from "vitest";
import { obtenerNumeroAleatorio } from './modelo';
import { marcadorPuntuacionB } from "./ui";


describe ("generarNumeroAleatorio" , () => {
it ('MathRandom forzado a 0 y deberia dar 0' , () => {
    //Arrange 
    const numeroEsperado : number = 0
    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0)
    //Act
    const resultado = obtenerNumeroAleatorio()

    //Assert
    expect(resultado).toBe(numeroEsperado)
})
it ('MathRandom forzado a 7 y deberia dar 7' , () => {
    //Arrange 
    const numeroEsperado : number = 7
    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0.7)
    //Act
    const resultado : number = obtenerNumeroAleatorio()

    //Assert
    expect(resultado).toBe(numeroEsperado)
})
})

describe ("marcadorPuntuacion casos" , () => {
 it('marcadorPuntuacion es igual a 7.5', () => {
    //Arrange
    const resultadoEsperado = "marcadorPuntuacion == 7.5"
    const texto : string = '7.5'
    const puntuacionExacta : number = 7.5
    //Act
    const resultado = marcadorPuntuacionB(texto, puntuacionExacta)
    //Assert
    expect(resultado).toBe(resultadoEsperado)
 })
})