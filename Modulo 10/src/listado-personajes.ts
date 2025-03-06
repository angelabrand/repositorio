import {
  obtenerPersonajes,
  obtenerPersonajePorNombrePersonaje,
} from "./listado-personajes-api";
import { Personaje } from "./listado-personajes-model";
import { pintarPersonajes } from "./listado-personajes.helpers";

const cargarFormulario = () => {
  const miFormulario = document.querySelector(".formulario");

  if (miFormulario && miFormulario instanceof HTMLFormElement) {
    miFormulario.addEventListener("submit", async (evento: Event) => {
      evento.preventDefault();
      const elementoInput = document.getElementById("search");

      if (elementoInput && elementoInput instanceof HTMLInputElement) {
        const nombrePersonaje = elementoInput.value;
        const personajesFiltrados: Personaje[] =
          await obtenerPersonajePorNombrePersonaje(nombrePersonaje);
        pintarPersonajes(personajesFiltrados);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  cargarFormulario();
  const listaPersonajes = await obtenerPersonajes();
  pintarPersonajes(listaPersonajes);
});

// setUp();
