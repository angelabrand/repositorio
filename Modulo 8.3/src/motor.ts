import { Carta, Tablero, cartas, tablero } from "./modelo";

cartas;
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [{ ...cartas[i] }, { ...cartas[j] }] = [cartas[j], cartas[i]];
  }
  return cartas;
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
