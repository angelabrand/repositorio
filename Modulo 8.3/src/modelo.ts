export interface Carta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

interface infoCarta {
  idFoto: number;
  imagen: string;
}

export const infoCartas: infoCarta[] = [
  { idFoto: 1, imagen: "./img/1.png" },
  { idFoto: 2, imagen: "./img/2.png" },
  { idFoto: 3, imagen: "./img/3.png" },
  { idFoto: 4, imagen: "./img/4.png" },
  { idFoto: 5, imagen: "./img/5.png" },
  { idFoto: 6, imagen: "./img/6.png" },
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

export const crearColeccionDeCartasInicial = (
  infoCartas: infoCarta[]
): Carta[] => {
  const cartasDuplicadas: infoCarta[] = infoCartas.flatMap((infoCarta) => [
    infoCarta,
    infoCarta,
  ]);

  const coleccionDeCartas: Carta[] = cartasDuplicadas.map((infoCarta) =>
    crearCartaInicial(infoCarta.idFoto, infoCarta.imagen)
  );
  return coleccionDeCartas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
  puntuacion: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
  puntuacion: 0,
});

export let tablero: Tablero = crearTableroInicial();
