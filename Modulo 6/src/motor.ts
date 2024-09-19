import {
    reiniciarLista,
  obtenerNumeroAleatorio,
  obtenerUrlBack,
  } from './modelo'
import {  
    muestraPuntuacion,
        BtnOtraCartaCerrado,
        reinicioPanel,
        reinicioBotones,
        reinicioMarcador,
        obtenerUrlCarta,
        pintarUrlCarta,
        finalizarPartida,
  } from './ui'

 export let marcadorPuntuacion: number = 0
  export const marcardorACero =  () => {
   return marcadorPuntuacion = 0
}


export const obtenerPuntosCarta = (carta: number) => {
    if (carta >= 7) {
      return 0.5;
    }
  
    return carta + 1;
  };
  
  export const sumarPuntosCarta = (puntos: number) => {
    return marcadorPuntuacion + puntos;
  };
  
  export const actualizarPuntuacion = (puntosActuales: number) => {
    marcadorPuntuacion = puntosActuales;
  };

  export const dameCarta = () => {
    const carta = obtenerNumeroAleatorio();
    const urlCarta = obtenerUrlCarta(carta);
    pintarUrlCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntosCarta(puntosCarta);
    actualizarPuntuacion(puntosSumados);
    muestraPuntuacion();
    finalizarPartida();
  };
  export const otraCarta = () => {
    const carta = obtenerNumeroAleatorio();
    const urlCarta = obtenerUrlCarta(carta);
    pintarUrlCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntosCarta(puntosCarta);
    actualizarPuntuacion(puntosSumados);
    muestraPuntuacion();
  };
 export function reinciarPartida() {
    reinicioPanel();
    reinicioMarcador();
    reinicioBotones();
    BtnOtraCartaCerrado();
    reiniciarLista();
    pintarUrlCarta(obtenerUrlBack());
  }