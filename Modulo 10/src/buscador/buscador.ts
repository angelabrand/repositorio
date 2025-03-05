import { obtenerPersonajes } from "../listado-personajes-api";
import { Personaje } from "../listado-personajes-model";
import { pintarPersonajes } from "../listado-personajes";

export const setUp = () => {
  let buscar = document.getElementById("btn-filtro");
  if (
    buscar !== null &&
    buscar !== undefined &&
    buscar instanceof HTMLButtonElement
  ) {
    buscar.addEventListener("click", function () {
      let input = document.getElementById("search");
      if (
        input !== null &&
        input !== undefined &&
        input instanceof HTMLInputElement
      ) {
        buscarPersonaje(input.value);
      }
    });
  }
};

const buscarPersonaje = async (texto: string) => {
  if (texto) {
    console.log("Buscando: " + texto);
    let personajesFiltrados: Personaje[] = [];
    let personajes = await obtenerPersonajes(); // Llamar API
    const textoNormalizado = texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    personajes.forEach((personaje) => {
      const nombreNormalizado = personaje.nombre
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      if (nombreNormalizado.includes(textoNormalizado)) {
        personajesFiltrados.push(personaje);
      }
    });
    console.log(personajesFiltrados);
    pintarPersonajes(personajesFiltrados);
  }
};
