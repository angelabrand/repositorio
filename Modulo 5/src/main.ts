let marcadorPuntuacion = 0;
const muestraPuntuacion = () => {
  let divPuntuacion = document.getElementById("score");
  if (divPuntuacion !== null && divPuntuacion !== undefined) {
    console.log(muestraPuntuacion);
    divPuntuacion.innerHTML = String(marcadorPuntuacion);
  }
};

const btnCerrado = () => {
  const btnCerrado = document.getElementById("btn-coger");
  if (btnCerrado && btnCerrado instanceof HTMLButtonElement) {
    btnCerrado.disabled = true;
  }
  const btnPlantarse = document.getElementById("btn-fin");
  if (btnPlantarse && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.disabled = true;
  }
};

const reinicioBotones = () => {
  const btnAbierto = document.getElementById("btn-coger");
  if (btnAbierto && btnAbierto instanceof HTMLButtonElement) {
    btnAbierto.disabled = false;
  }
  const btnPlantarse = document.getElementById("btn-fin");
  if (btnPlantarse && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.disabled = false;
  }
};
const BtnOtraCartaAbierto = () => {
  const BtnOtraCarta = document.getElementById("btn-saber");
  if (BtnOtraCarta && BtnOtraCarta instanceof HTMLButtonElement) {
    BtnOtraCarta.disabled = false;
  }
};
const BtnOtraCartaCerrado = () => {
  const BtnOtraCarta = document.getElementById("btn-saber");
  if (BtnOtraCarta && BtnOtraCarta instanceof HTMLButtonElement) {
    BtnOtraCarta.disabled = true;
  }
};
const reinicioPanel = () => {
  let divArriba = document.getElementById("bocaArriba");
  if (divArriba !== null && divArriba !== undefined) {
    divArriba.innerHTML = String("");
  }
};
const reinicioMarcador = () => {
  let divPuntuacion = document.getElementById("score");
  if (divPuntuacion !== null && divPuntuacion !== undefined) {
    divPuntuacion.innerHTML = String((marcadorPuntuacion = 0));
  }
};

BtnOtraCartaCerrado();

//////////////////////////////////////////////////

interface Carta {
  valor: string;
  puntuacion: number;
  src: string;
}

let listaCartas: Carta[] = [
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

let cartasDentroLista: Carta[] = listaCartas.slice();

function reiniciarLista() {
  listaCartas = cartasDentroLista.slice() }

//splice devuelve un array con los elementos eliminados, así que seleccionamos el primer (y único) elemento devuelto.

const dameCarta = () => {
  let numero = Math.floor(Math.random() * listaCartas.length);
  let carta = listaCartas.splice(numero, 1)[0];
  BtnOtraCartaCerrado();
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
      let gameOver = "GAME OVER";
      puntuacion.innerHTML = gameOver;
      btnCerrado();
      BtnOtraCartaCerrado();
    }
  }
};


const btnCoger = document.getElementById("btn-coger");
if (btnCoger !== null && btnCoger !== undefined) {
  btnCoger.addEventListener("click", dameCarta);
}
const finalizar = () => {
  let puntuacion = document.getElementById("score");

  if (
    puntuacion !== null &&
    puntuacion !== undefined &&
    puntuacion instanceof HTMLParagraphElement
  ) {
    const nuevaPuntuacion = marcadorPuntuacion;
    puntuacion.innerText = `${nuevaPuntuacion}`;
    switch (true) {
      case nuevaPuntuacion < 4 && nuevaPuntuacion > 0:
        puntuacion.innerHTML = "Has sido muy conservador";
        btnCerrado();
        BtnOtraCartaAbierto();
        break;

      case nuevaPuntuacion == 5 || nuevaPuntuacion < 6: 
        puntuacion.innerHTML = "Te ha entrado el canguelo eh?";
        btnCerrado();
        BtnOtraCartaAbierto();
        break;

      case nuevaPuntuacion == 6 || nuevaPuntuacion == 7:
        puntuacion.innerHTML = "Casi casi...";
        btnCerrado();
        BtnOtraCartaAbierto();
        break;

      case nuevaPuntuacion == 7.5:
        btnCerrado();
        puntuacion.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
        break;
  }
}
}

const otraCarta = () => {
  let numero = Math.floor(Math.random() * listaCartas.length);
  let carta = listaCartas.splice(numero, 1)[0];
  let divArriba = document.getElementById("bocaArriba");
  if (divArriba !== null && divArriba !== undefined) {
    divArriba.innerHTML =
      divArriba.innerHTML + `<div><img src="${carta.src}" alt="" /></div>`;
  }
};

const BtnOtraCarta = document.getElementById("btn-saber");
if (BtnOtraCarta && BtnOtraCarta instanceof HTMLButtonElement) {
  BtnOtraCarta.addEventListener("click", otraCarta);
}

const btnFinalizar = document.getElementById("btn-fin");
if (btnFinalizar !== null && btnCoger !== undefined) {
  btnFinalizar.addEventListener("click", finalizar);
}

function reinciarPartida() {
  reinicioPanel();
  reinicioMarcador();
  reinicioBotones();
  BtnOtraCartaCerrado();
  reiniciarLista();
}

const btnReiniciar = document.getElementById("btn-restart");
if (btnReiniciar !== null && btnReiniciar !== undefined) {
  btnReiniciar.addEventListener("click", reinciarPartida);
}
