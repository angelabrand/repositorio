import { Carta, Tablero, tablero } from "./modelo";

export const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
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
  if (nuevaCarta.encontrada == false && nuevaCarta.estaVuelta == false) {
    return true;
  }

  return false;
};

const cambiarIndiceDeCartas = (tablero: Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  let sePuedeVoltear = sePuedeVoltearLaCarta(tablero, indice);
  if (sePuedeVoltear) {
    let carta: Carta = tablero.cartas[indice];
    carta.estaVuelta = true;
    cambiarSrcImagen("containercards", indice, carta);

    if (
      tablero.estadoPartida === "PartidaNoIniciada" ||
      tablero.estadoPartida === "CeroCartasLevantadas"
    ) {
      tablero.indiceCartaVolteadaA = indice;
      tablero.estadoPartida = "UnaCartaLevantada";
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
      tablero.indiceCartaVolteadaB = indice;
      tablero.estadoPartida = "DosCartasLevantadas";
    }
  }
};

const divClick = (event: MouseEvent, tablero: Tablero): void => {
  console.log("Antes");
  console.log(tablero);
  if (
    event.currentTarget !== null &&
    event.currentTarget !== undefined &&
    event.currentTarget instanceof HTMLDivElement
  ) {
    const target = event.currentTarget;
    const indiceArrayStr = target.getAttribute("data-indice-array");
    const indiceImagenStr = target.getAttribute("data-indice-imagen");
    if (indiceArrayStr !== null && indiceImagenStr !== null) {
      const indiceArray = Number(indiceArrayStr);
      voltearLaCarta(tablero, indiceArray);
      if (tablero.estadoPartida === "DosCartasLevantadas") {
        if (
          sonPareja(
            tablero.indiceCartaVolteadaA,
            tablero.indiceCartaVolteadaB,
            tablero
          )
        ) {
          parejaEncontrada(
            tablero,
            tablero.indiceCartaVolteadaA,
            tablero.indiceCartaVolteadaB
          );
          console.log("PAREJA ENCONTRADA");
        } else {
          parejaNoEncontrada(
            tablero,
            tablero.indiceCartaVolteadaA,
            tablero.indiceCartaVolteadaB
          );
          console.log("NO PAREJA");
        }
      }
    }
  }
  console.log("Despues");
  console.log(tablero);
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

export const divs = document.querySelectorAll<HTMLDivElement>(".cardcontainer");
divs.forEach((div) => {
  div.addEventListener("click", (event) => divClick(event, tablero));
});

export const sonPareja = (
  indiceA: number | undefined,
  indiceB: number | undefined,
  tablero: Tablero
): boolean => {
  if (indiceA === undefined || indiceB === undefined) {
    return false;
  }
  if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
    return true;
  }
  return false;
};

/* Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa. */
const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number | undefined,
  indiceB: number | undefined
): void => {
  if (indiceA === undefined || indiceB === undefined) {
    return;
  }
  //marcarlas como encontradas
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.puntuacion += 1;
  cambiarIndiceDeCartas(tablero);
  esPartidaCompleta(tablero);
  actualizarPuntuacion(tablero);

  tablero.estadoPartida = "CeroCartasLevantadas";
};
//comprobar si la partida esta completa

/*Aquí asumimos que no son pareja y las volvemos a poner boca abajo */

const parejaNoEncontrada = async (
  tablero: Tablero,
  indiceA: number | undefined,
  indiceB: number | undefined
): Promise<void> => {
  if (indiceA === undefined || indiceB === undefined) {
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  cartaBocaAbajo("containercards", indiceA);
  cartaBocaAbajo("containercards", indiceB);
  cambiarIndiceDeCartas(tablero);
  tablero.estadoPartida = "CeroCartasLevantadas";
};

//Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  if (tablero.cartas.every((carta) => carta.encontrada)) {
    tablero.estadoPartida = "PartidaCompleta";
    return true;
  }
  return false;
};

export const iniciaPartida = (tablero: Tablero): void => {
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

const reinciarPartida = (tablero: Tablero): void => {
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
const resetearCartas = (tablero: Tablero): void => {
  tablero.cartas.forEach((carta) => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  });
};
const botonReiniciar = document.getElementById("btn");
if (
  botonReiniciar !== null &&
  botonReiniciar !== undefined &&
  botonReiniciar instanceof HTMLButtonElement
) {
  botonReiniciar.addEventListener("click", () => reinciarPartida(tablero));
}
