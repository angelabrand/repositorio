/*interface infoCarta {
  idFoto: number;
  imagen: string;
}
function shuffleArray(array: Carta[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let 
shuffleArray(cartas);

/////////////////////////////////////

let indice = 0;

function clickCarta(event: any) {
  if (indice <= 1) {
    const target = event.target;
    const imgElement =
      target.tagName === "IMG" ? target : target.querySelector("img");

    if (imgElement) {
      let cambioCarta: Carta = cartas[indice];
      indice += 1;
      imgElement.src = cambioCarta.imagen;
      console.log("clickCarta");
    }
  }
}

const mostrarCarta = document.getElementById("carta");
if (
  mostrarCarta !== null &&
  mostrarCarta !== undefined &&
  mostrarCarta instanceof HTMLDivElement
) {
  mostrarCarta.addEventListener("click", clickCarta);
}

const mostrarCarta2 = document.getElementById("carta2");
if (
  mostrarCarta2 !== null &&
  mostrarCarta2 !== undefined &&
  mostrarCarta2 instanceof HTMLDivElement
) {
  mostrarCarta2.addEventListener("click", clickCarta);
}
*/

import { tablero } from "./modelo";
import { iniciaPartida} from "./motor";

iniciaPartida(tablero);
