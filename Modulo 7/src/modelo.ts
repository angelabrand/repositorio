export interface Carta {
    valor: string;
    puntuacion: number;
    src: string;
  }
  
 export let listaCartas: Carta[] = [
    { valor: "As", puntuacion: 1, src: "./img/1_as-copas.jpg" },
    { valor: "Dos", puntuacion: 2, src: "./img/2_dos-copas.jpg" },
    { valor: "Tres", puntuacion: 3, src: "./img/3_tres-copas.jpg" },
    { valor: "Cuatro", puntuacion: 4, src: "./img/4_cuatro-copas.jpg" },
    { valor: "Cinco", puntuacion: 5, src: "./img/5_cinco-copas.jpg" },
    { valor: "Seis", puntuacion: 6, src: "./img/6_seis-copas.jpg" },
    { valor: "Siete", puntuacion: 7, src: "./img/7_siete-copas.jpg" },
    { valor: "Sota", puntuacion: 0.5, src: "./img/10_sota-copas.jpg" },
    { valor: "Caballo", puntuacion: 0.5, src: "./img/11_caballo-copas.jpg" },
    { valor: "Rey", puntuacion: 0.5, src: "./img/12_rey-copas.jpg" },
  ];
  
  export let cartasDentroLista: Carta[] = listaCartas.slice();
  
  export const reiniciarLista =( ) => {
    listaCartas = cartasDentroLista.slice();
  }
  
 export const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * listaCartas.length);
  };
  
 export const obtenerUrlBack = () => {
    return "./img/back.jpg";
  };

 