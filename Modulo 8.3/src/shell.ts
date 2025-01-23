import { reinciarPartida, divClick } from "./ui";
import { tablero } from "./modelo";

const divs = document.querySelectorAll<HTMLDivElement>(".cardcontainer");
divs.forEach((div) => {
  div.addEventListener("click", (event) => divClick(event, tablero));
});

const botonReiniciar = document.getElementById("btn");
if (
  botonReiniciar !== null &&
  botonReiniciar !== undefined &&
  botonReiniciar instanceof HTMLButtonElement
) {
  botonReiniciar.addEventListener("click", () => reinciarPartida(tablero));
}
