
import {
    obtenerUrlBack,
    obtenerNumeroAleatorio,
    reiniciarLista,


} from './modelo'

import {
    marcadorPuntuacion,
    marcardorACero,
    actualizarPuntuacion,
    sumarPuntosCarta,
    obtenerPuntosCarta,
} from './motor'

export const marcadorPuntuacionB  = (texto : string, puntuacionExacta :number)=> {
  return "marcadorPuntuacion"
}

export const muestraPuntuacion = () => {
    let divPuntuacion = document.getElementById("score");
    if (divPuntuacion !== null && divPuntuacion !== undefined) {
      divPuntuacion.innerHTML = String(marcadorPuntuacion);
    }
  };
  
 export const btnCerrado = () => {
    const btnCerrado = document.getElementById("btn-coger");
    if (btnCerrado && btnCerrado instanceof HTMLButtonElement) {
      btnCerrado.disabled = true;
    }
    const btnPlantarse = document.getElementById("btn-fin");
    if (btnPlantarse && btnPlantarse instanceof HTMLButtonElement) {
      btnPlantarse.disabled = true;
    }
  };
  
  export  const reinicioBotones = () => {
    const btnAbierto = document.getElementById("btn-coger");
    if (btnAbierto && btnAbierto instanceof HTMLButtonElement) {
      btnAbierto.disabled = false;
    }
   const btnPlantarse = document.getElementById("btn-fin");
    if (btnPlantarse && btnPlantarse instanceof HTMLButtonElement) {
      btnPlantarse.disabled = false;
    }
  };
  export  const BtnOtraCartaAbierto = () => {
    const BtnOtraCarta = document.getElementById("btn-saber");
    if (BtnOtraCarta && BtnOtraCarta instanceof HTMLButtonElement) {
      BtnOtraCarta.disabled = false;
    }
  };
  export const BtnOtraCartaCerrado = () => {
    const BtnOtraCarta = document.getElementById("btn-saber");
    if (BtnOtraCarta && BtnOtraCarta instanceof HTMLButtonElement) {
      BtnOtraCarta.disabled = true;
    }
  };
  export  const reinicioPanel = () => {
    let divArriba = document.getElementById("bocaArriba");
    if (divArriba !== null && divArriba !== undefined) {
      divArriba.innerHTML = String("");
    }
  };
 export const reinicioMarcador = () => {
    let divPuntuacion = document.getElementById("score");
    if (divPuntuacion !== null && divPuntuacion !== undefined && divPuntuacion instanceof HTMLParagraphElement) {
      divPuntuacion.innerHTML = String(marcardorACero());
    }
  };
  
 BtnOtraCartaCerrado();

 export const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
      case 0:
        return "./img/1_as-copas.jpg";
      case 1:
        return "./img/2_dos-copas.jpg";
      case 2:
        return "./img/3_tres-copas.jpg";
      case 3:
        return "./img/4_cuatro-copas.jpg";
      case 4:
        return "./img/5_cinco-copas.jpg";
      case 5:
        return "./img/6_seis-copas.jpg";
      case 6:
        return "./img/7_siete-copas.jpg";
      case 7:
        return "./img/10_sota-copas.jpg";
      case 8:
        return "./img/11_caballo-copas.jpg";
      case 9:
        return "./img/12_rey-copas.jpg";
      default:
        return obtenerUrlBack();
    }
  };
  
  export const pintarUrlCarta = (urlCarta: string) => {
    const elementoImagen = document.getElementById("imagenCarta");
  
    if (
      elementoImagen !== null &&
      elementoImagen !== undefined &&
      elementoImagen instanceof HTMLImageElement
    ) {
      elementoImagen.src = urlCarta;
    }
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

 export const plantarPartida = () => {
    let divPuntuacion = document.getElementById("score");
    btnCerrado();
    BtnOtraCartaAbierto();
    if (
      divPuntuacion !== null &&
      divPuntuacion !== undefined &&
      divPuntuacion instanceof HTMLParagraphElement
    ) {
      if (marcadorPuntuacion < 4) {
        divPuntuacion.innerHTML = "Has sido muy conservador";
      }
      if (marcadorPuntuacion == 5) {
        divPuntuacion.innerHTML = "Te ha entrado el canguelo eh?";
      }
      if (marcadorPuntuacion == 6 || marcadorPuntuacion == 7) {
        divPuntuacion.innerHTML = "Casi casi...";
      }
      if (marcadorPuntuacion == 7.5) {
        divPuntuacion.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
        BtnOtraCartaCerrado();
      }
    }
  };
 export const finalizarPartida = () => {
    let divPuntuacion = document.getElementById("score");
  
    if (
      divPuntuacion !== null &&
      divPuntuacion !== undefined &&
      divPuntuacion instanceof HTMLParagraphElement
    ) {
      if (marcadorPuntuacion > 7.5) {
        divPuntuacion.innerHTML = "GAME OVER";
        btnCerrado();
      }
    }
  };
  
  
 

