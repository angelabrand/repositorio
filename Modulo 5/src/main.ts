//heading puntuacion

let marcadorPuntuacion = 0;
const muestraPuntuacion = () => {
  let divPuntuacion = document.getElementById("score");
  if (divPuntuacion !== null && divPuntuacion !== undefined) {
    console.log(muestraPuntuacion);
    divPuntuacion.innerHTML = String(marcadorPuntuacion);
  }
};

interface Carta {
  valor: string;
  puntuacion: number;
  src: string;
}
const listaCartas: Carta[] = [
  { valor: "As", puntuacion: 7, src: "./img/1_as-copas.jpg" },
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

//splice devuelve un array con los elementos eliminados, así que seleccionamos el primer (y único) elemento devuelto.

const dameCarta = () => {
  let numero = Math.floor(Math.random() * listaCartas.length);
  let carta = listaCartas.splice(numero, 1)[0];
  let divArriba = document.getElementById("bocaArriba");
  if (divArriba !== null && divArriba !== undefined) {
    divArriba.innerHTML =
      divArriba.innerHTML + `<div><img src="${carta.src}" alt="" /></div>`;
  }
  marcadorPuntuacion += carta.puntuacion;
  let puntuacion = document.getElementById("score");
  if (
    puntuacion !== null &&
    puntuacion !== undefined &&
    puntuacion instanceof HTMLParagraphElement
  ) {
    const nuevaPuntuacion = marcadorPuntuacion;
    puntuacion.innerText = `${nuevaPuntuacion}`;
    if (nuevaPuntuacion > 7.5) {
      puntuacion.innerHTML = "GAME OVER";
    }
    if (nuevaPuntuacion == 7.5) {
      puntuacion.innerHTML = "HAS GANADO!";
    }
  }
};

const btnCoger = document.getElementById("btn-coger");
if (btnCoger !== null && btnCoger !== undefined) {
  btnCoger.addEventListener("click", dameCarta);
}

const btnFinalizar = document.getElementById("btn-fin");
if (btnFinalizar !== null && btnCoger !== undefined) {
  btnFinalizar.addEventListener("click", dameCarta);
}
function reinciarPartida() {
  let divArriba = document.getElementById("bocaArriba");
  if (divArriba !== null && divArriba !== undefined) {
    divArriba.innerHTML = String("");
  }
  let divPuntuacion = document.getElementById("score");
  if (divPuntuacion !== null && divPuntuacion !== undefined) {
    divPuntuacion.innerHTML = String((marcadorPuntuacion = 0));
  }
}

const btnReiniciar = document.getElementById("btn-restart");
if (btnReiniciar !== null && btnReiniciar !== undefined) {
  btnReiniciar.addEventListener("click", reinciarPartida);
}
