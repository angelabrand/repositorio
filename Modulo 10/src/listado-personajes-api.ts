import axios from "axios";
import { Personaje } from "./listado-personajes-model";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get("http://localhost:3000/personajes");
    return data;
  } catch (error) {
    throw new Error("Error al obtener películas");
  }
};

export const obtenerPersonajePorNombrePersonaje = async (
  nombrePersonaje: string
): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/personajes?nombre_like=${nombrePersonaje}`
    );
    return data;
  } catch (error) {
    throw new Error("Error a la hora de filtrar personajes");
  }
};
