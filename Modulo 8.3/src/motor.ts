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
  if (nuevaCarta.encontrada == false && nuevaCarta.estaVuelta == false) {
    return true;
  }

  if (
    tablero.indiceCartaVolteadaA == undefined &&
    tablero.indiceCartaVolteadaB == undefined
  ) {
    return true;
  }

  return false;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  let sePuedeVoltear = sePuedeVoltearLaCarta(tablero, indice);
  if (sePuedeVoltear) {
    let carta: Carta = tablero.cartas[indice];
    carta.estaVuelta = true;
    // Cambiar img
    // Poner carta en  indiceCartaVolteadaA o indiceCartaVolteadaB
  }
};

const divClick = (event: MouseEvent, tablero: Tablero): void => {
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
      const indiceImagen = Number(indiceImagenStr);
      console.log(`El índice del div es: ${indiceArray} ${indiceImagen}`);
      voltearLaCarta(tablero, indiceArray);
      console.log(tablero.cartas[indiceArray]);
    }
  }
};

export const divs = document.querySelectorAll<HTMLDivElement>(".cardcontainer");
divs.forEach((div) => {
  div.addEventListener("click", (event) => divClick(event, tablero));
});
/*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id

  export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    //...
  }
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
 
  const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    //...
  }
  
  /*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
 
  const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    // ...
  }
  
  /*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
 
  export const esPartidaCompleta(tablero: Tablero) : boolean => {
    //...
  }
  
  /*
  Iniciar partida
    */

export const iniciaPartida = (tablero: Tablero): void => {
  barajarCartas(tablero.cartas);
};
