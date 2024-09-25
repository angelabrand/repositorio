
 export let marcadorPuntuacion: number = 0
  export const marcardorACero =  () => {
   return marcadorPuntuacion = 0
}


export const obtenerPuntosCarta = (carta: number) => {
    if (carta >= 7) {
      return 0.5;
    }
  
    return carta + 1;
  };
  
  export const sumarPuntosCarta = (puntos: number) => {
    return marcadorPuntuacion + puntos;
  };
  
  export const actualizarPuntuacion = (puntosActuales: number) => {
    marcadorPuntuacion = puntosActuales;
  };

 