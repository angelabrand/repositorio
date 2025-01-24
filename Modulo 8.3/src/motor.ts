import { Carta, Tablero, cartas, tablero } from "./modelo";

cartas;
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [{ ...cartas[i] }, { ...cartas[j] }] = [cartas[j], cartas[i]];
  }
  return cartas;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
  }
  //}
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
    return true;
  }
  return false;
};

export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.puntuacion += 1;
  cambiarIndiceDeCartas(tablero);
};

export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  cambiarIndiceDeCartas(tablero);
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  if (tablero.cartas.every((carta) => carta.encontrada)) {
    return true;
  }
  return false;
};

export const cambiarIndiceDeCartas = (tablero: Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  let nuevaCarta: Carta = tablero.cartas[indice];

  if (
    tablero.indiceCartaVolteadaA !== undefined &&
    tablero.indiceCartaVolteadaB !== undefined
  ) {
    return false;
  }
  if (!nuevaCarta.encontrada && !nuevaCarta.estaVuelta) {
    return true;
  }

  return false;
};

export const resetearCartas = (tablero: Tablero): void => {
  tablero.cartas.forEach((carta) => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  });
};

const iniciaPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "PartidaNoIniciada";
  document.querySelectorAll(".cardcontainer").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
  barajarCartas(tablero.cartas);
  tablero.puntuacion = 0;
  cambiarIndiceDeCartas(tablero);
};

iniciaPartida(tablero);

export function encontrarDivPorIndiceArray(
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

export function cartaBocaAbajo(divId: string, indice: number): void {
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
