import {
  barajarCartas,
  cambiarIndiceDeCartas,
  sePuedeVoltearLaCarta,
  resetearCartas,
} from "./motor";
import {
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
  esPartidaCompleta,
} from "./motor";
import { Tablero, tablero } from "./modelo";

export const divClick = (indiceArray: number): void => {
  if (sePuedeVoltearLaCarta(tablero, indiceArray)) {
    voltearLaCarta(tablero, indiceArray);
    cambiarSrcImagen(indiceArray);
    esLaSegundaCarta();
  } else {
    console.log("no se puede dar la vuelta a la carta");
  }
};

const esLaSegundaCarta = () => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;

  if (indiceA !== undefined && indiceB !== undefined) {
    if (sonPareja(indiceA, indiceB, tablero)) {
      parejaEncontrada(tablero, indiceA, indiceB);
      actualizarPuntuacion(tablero);
      if (esPartidaCompleta(tablero)) {
        tablero.estadoPartida = "PartidaCompleta";
        actualizarPuntuacion(tablero);
        console.log("enhorabuena has encontrado todas las parejas");
      }
    } else {
      parejaNoEncontrada(tablero, indiceA, indiceB);
      setTimeout(() => {
        cartaBocaAbajo("containercards", indiceA);
        cartaBocaAbajo("containercards", indiceB);
      }, 500);
    }
  }
};

const actualizarPuntuacion = (tablero: Tablero): void => {
  let puntuacionActualizada = document.getElementById("puntuacion");
  let textoPuntuacion = document.getElementById("textoPuntuacion");
  if (
    textoPuntuacion !== null &&
    textoPuntuacion !== undefined &&
    textoPuntuacion instanceof HTMLParagraphElement
  ) {
    if (
      puntuacionActualizada !== null &&
      puntuacionActualizada !== undefined &&
      puntuacionActualizada instanceof HTMLDivElement
    ) {
      if (tablero.estadoPartida === "PartidaCompleta") {
        puntuacionActualizada.innerHTML = "🏆";
        textoPuntuacion.innerHTML = "¡HAS GANADO!";
      } else {
        puntuacionActualizada.innerHTML = `${tablero.puntuacion.toString()}/6`;
      }
    }
  }
};
const resetearPuntuacion = (tablero: Tablero): void => {
  tablero.puntuacion = 0;
  tablero.estadoPartida = "PartidaNoIniciada";
  let puntuacionActualizada = document.getElementById("puntuacion");
  let textoPuntuacion = document.getElementById("textoPuntuacion");
  if (
    textoPuntuacion !== null &&
    textoPuntuacion !== undefined &&
    textoPuntuacion instanceof HTMLParagraphElement
  ) {
    if (
      puntuacionActualizada !== null &&
      puntuacionActualizada !== undefined &&
      puntuacionActualizada instanceof HTMLDivElement
    ) {
      puntuacionActualizada.innerHTML = "0/6";
      textoPuntuacion.innerHTML = "PAREJAS ENCONTRADAS";
    }
  }
};
function encontrarDivPorIndiceArray(
  divId: string,
  indice: number
): HTMLDivElement | null {
  const contenedor = document.getElementById(divId) as HTMLDivElement;
  const divs = contenedor.querySelectorAll("div[data-indice-array]");
  const divsArray = Array.from(divs);
  for (const div of divsArray) {
    if (div.getAttribute("data-indice-array") === indice.toString()) {
      return div as HTMLDivElement;
    }
  }
  return null;
}

function cartaBocaAbajo(divId: string, indice: number): void {
  const divSeleccionado = encontrarDivPorIndiceArray(divId, indice);

  if (divSeleccionado) {
    const img = divSeleccionado.querySelector("img") as HTMLImageElement;
    if (img) {
      img.src = "";
    } else {
      console.error("No hay imagen dentro del div.");
    }
  }
}

function cambiarSrcImagen(indiceArray: number): void {
  const dataIndiceId = `[data-indice-array="${indiceArray}"]`;
  const elementoImg = document.querySelector(`img${dataIndiceId}`);

  if (elementoImg instanceof HTMLImageElement) {
    elementoImg.src = tablero.cartas[indiceArray].imagen;
  }
}

export const reinciarPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "PartidaNoIniciada";
  barajarCartas(tablero.cartas);
  resetearPuntuacion(tablero);
  cambiarIndiceDeCartas(tablero);
  volverAVoltearCartas(tablero);
  resetearCartas(tablero);
};

const volverAVoltearCartas = (tablero: Tablero): void => {
  for (let i = 0; i < tablero.cartas.length; i++) {
    cartaBocaAbajo("containercards", i);
  }
};
