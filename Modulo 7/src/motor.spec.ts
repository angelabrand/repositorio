import { vi } from "vitest";
import { obtenerNumeroAleatorio } from "./modelo";
import {obtenerPuntosCarta, sumarPuntosCarta, marcadorPuntuacion, actualizarPuntuacion, marcardorACero} from "./motor";



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



describe("valor del marcador reseteado" , () => {
  it('deberia de ser 0', () => {
    //arrange

   const resultadoEsperado: number= 0
    //act
    const resultado = marcardorACero()

    //assert
    expect(resultado).toBe(resultadoEsperado)
  })
})


describe("Valor de las cartas " , () => {
  it('si es una carta del 1 al 7 deberia obtener 1 punto', () => {
    //arrange
   const carta: number = 2
   const resultadoEsperado: number = 3
    //act
    const resultado = obtenerPuntosCarta(carta)

    //assert
    expect(resultado).toBe(resultadoEsperado)
  })
  it('si es sota, caballo o rey deberia obtener 0.5 puntos', () => {
    //arrange
   const carta: number = 8
   const resultadoEsperado: number = 0.5
    //act
    const resultado = obtenerPuntosCarta(carta)

    //assert
    expect(resultado).toBe(resultadoEsperado)
  })
})

describe('registro de los puntos en el marcadorPuntuacion', 
  () => {
    it('que se sumen los 1 puntos al marcadorPuntuacion', () => {
      const puntos : number = 2
      const sumaAlMacador : number = marcadorPuntuacion + 2

      const resultado = sumarPuntosCarta(puntos)

      expect(resultado).toBe(sumaAlMacador)
    })
    it('que se sumen los puntos 0.5 al marcadorPuntuacion', () => {
      const puntos : number = 1.5
      const sumaAlMacador : number = marcadorPuntuacion + puntos

      const resultado = sumarPuntosCarta(puntos)

      expect(resultado).toBe(sumaAlMacador)
    })
  }
)

describe('Actualizar puntuacion', ()=> {
  it('que marcadorPuntuacion deberia mostrar los puntos actualizados' , () => {
   
    const puntosActuales :number = 3
    
  actualizarPuntuacion(puntosActuales)

    expect(marcadorPuntuacion).toBe(puntosActuales)
  })
})      
