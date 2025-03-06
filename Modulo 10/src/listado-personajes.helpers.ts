import { Personaje } from "./listado-personajes-model";

const crearElementoImagen = (
  imagen: string,
  titulo: string
): HTMLImageElement => {
  const elementoImg = document.createElement("img");
  elementoImg.src = `http://localhost:3000/${imagen}`;
  elementoImg.alt = titulo;
  return elementoImg;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};

const crearElementoH4 = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("h4");
  parrafo.textContent = texto;
  return parrafo;
};

const crearContenedorPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("personaje-contenedor");
  elementoPersonaje.appendChild(
    crearElementoImagen(personaje.imagen, personaje.nombre)
  );
  const contenedorDatos = document.createElement("div");
  contenedorDatos.classList.add("datos-personaje");
  contenedorDatos.appendChild(crearElementoH4("Nombre:"));
  contenedorDatos.appendChild(crearElementoParrafo(personaje.nombre));
  contenedorDatos.appendChild(crearElementoH4("Especialidad:"));
  contenedorDatos.appendChild(crearElementoParrafo(personaje.especialidad));
  contenedorDatos.appendChild(crearElementoH4("Habilidades:"));
  contenedorDatos.appendChild(
    crearElementoParrafo(personaje.habilidades.toString())
  );
  elementoPersonaje.appendChild(contenedorDatos);
  return elementoPersonaje;
};

export const pintarPersonajes = (personajes: Personaje[]) => {
  const contenedor = document.getElementById("listado-personajes");

  if (contenedor && contenedor instanceof HTMLDivElement) {
    contenedor.innerHTML = "";
    personajes.forEach((personaje) => {
      const contenedorPersonaje = crearContenedorPersonaje(personaje);
      contenedor.appendChild(contenedorPersonaje);
    });
  }
};
