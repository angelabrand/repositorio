import {
  barajarCartas,
  cambiarIndiceDeCartas,
  sePuedeVoltearLaCarta,
  resetearCartas,
} from "./motor";
import { Carta, Tablero } from "./modelo";

const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  let sePuedeVoltear = sePuedeVoltearLaCarta(tablero, indice);
  if (sePuedeVoltear) {
    let carta: Carta = tablero.cartas[indice];
    carta.estaVuelta = true;
    cambiarSrcImagen("containercards", indice, carta);
    console.log(indice);
    if (tablero.estadoPartida === "CeroCartasLevantadas") {
      tablero.indiceCartaVolteadaA = indice;
      tablero.estadoPartida = "UnaCartaLevantada";
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
      tablero.indiceCartaVolteadaB = indice;
      tablero.estadoPartida = "DosCartasLevantadas";
    }
  }
};

export const divClick = (event: MouseEvent, tablero: Tablero): void => {
  if (
    event.currentTarget !== null &&
    event.currentTarget !== undefined &&
    event.currentTarget instanceof HTMLDivElement
  ) {
    const target = event.currentTarget;
    const indiceArrayStr = target.getAttribute("data-indice-array");
    if (indiceArrayStr !== null) {
      const indiceArray = Number(indiceArrayStr);
      voltearLaCarta(tablero, indiceArray);
      const indiceA = tablero.indiceCartaVolteadaA;
      const indiceB = tablero.indiceCartaVolteadaB;
      console.log(tablero);
      if (indiceA !== undefined && indiceB !== undefined) {
        if (sonPareja(indiceA, indiceB, tablero)) {
          parejaEncontrada(tablero, indiceA, indiceB);
        } else {
          parejaNoEncontrada(tablero, indiceA, indiceB);
        }
      }
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

function cambiarSrcImagen(divId: string, indice: number, carta: Carta): void {
  const divSeleccionado = encontrarDivPorIndiceArray(divId, indice);

  if (divSeleccionado) {
    const img = divSeleccionado.querySelector("img") as HTMLImageElement;
    if (img) {
      img.src = carta.imagen;
    } else {
      console.error("No se encontró la imagen dentro del div.");
    }
  } else {
    console.error("Div no encontrado.");
  }
}

//** Match de las cartas */

const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
    return true;
  }
  return false;
};

const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.puntuacion += 1;
  cambiarIndiceDeCartas(tablero);
  esPartidaCompleta(tablero);
  actualizarPuntuacion(tablero);
};

const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  if (indiceA === undefined || indiceB === undefined) {
    return;
  }
  setTimeout(() => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    cartaBocaAbajo("containercards", indiceA);
    cartaBocaAbajo("containercards", indiceB);
    cambiarIndiceDeCartas(tablero);
    tablero.estadoPartida = "CeroCartasLevantadas";
  }, 500);
};

const esPartidaCompleta = (tablero: Tablero): boolean => {
  if (tablero.cartas.every((carta) => carta.encontrada)) {
    tablero.estadoPartida = "PartidaCompleta";
    return true;
  }
  return false;
};

//** Reiniciar partida */
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
