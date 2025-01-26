import { reinciarPartida, divClick } from "./ui";
import { tablero } from "./modelo";

tablero.cartas.forEach((_, index) => {
  const dataIndiceId = `[data-indice-array="${index}"]`;
  const elementoDiv = document.querySelector(`div${dataIndiceId}`);

  if (elementoDiv instanceof HTMLDivElement) {
    elementoDiv.addEventListener("click", () => divClick(index));
  }
});

const botonReiniciar = document.getElementById("btn");
if (
  botonReiniciar !== null &&
  botonReiniciar !== undefined &&
  botonReiniciar instanceof HTMLButtonElement
) {
  botonReiniciar.addEventListener("click", () => reinciarPartida(tablero));
}
