let marcadorPuntuacion = 0;
const muestraPuntuacion = () => {
  let divPuntuacion = document.getElementById("score");
  if (divPuntuacion !== null && divPuntuacion !== undefined) {
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
  listaCartas = cartasDentroLista.slice();
}

const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * listaCartas.length);
};

const obtenerUrlBack = () => {
  return "./img/back.jpg";
};

const obtenerUrlCarta = (carta: number) => {
  switch (carta) {
    case 0:
      return "./img/1_as-copas.jpg";
    case 1:
      return "./img/2_dos-copas.jpg";
    case 2:
      return "./img/3_tres-copas.jpg";
    case 3:
      return "./img/4_cuatro-copas.jpg";
    case 4:
      return "./img/5_cinco-copas.jpg";
    case 5:
      return "./img/6_seis-copas.jpg";
    case 6:
      return "./img/7_siete-copas.jpg";
    case 7:
      return "./img/10_sota-copas.jpg";
    case 8:
      return "./img/11_caballo-copas.jpg";
    case 9:
      return "./img/12_rey-copas.jpg";
    default:
      return obtenerUrlBack();
  }
};

const pintarUrlCarta = (urlCarta: string) => {
  const elementoImagen = document.getElementById("imagenCarta");

  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = urlCarta;
  }
};

const obtenerPuntosCarta = (carta: number) => {
  if (carta >= 7) {
    return 0.5;
  }

  return carta + 1;
};

const sumarPuntosCarta = (puntos: number) => {
  return marcadorPuntuacion + puntos;
};

const actualizarPuntuacion = (puntosActuales: number) => {
  marcadorPuntuacion = puntosActuales;
};

const plantarPartida = () => {
  let divPuntuacion = document.getElementById("score");
  btnCerrado();
  BtnOtraCartaAbierto();
  if (
    divPuntuacion !== null &&
    divPuntuacion !== undefined &&
    divPuntuacion instanceof HTMLParagraphElement
  ) {
    if (marcadorPuntuacion < 4) {
      divPuntuacion.innerHTML = "Has sido muy conservador";
    }
    if (marcadorPuntuacion == 5) {
      divPuntuacion.innerHTML = "Te ha entrado el canguelo eh?";
    }
    if (marcadorPuntuacion == 6 || marcadorPuntuacion == 7) {
      divPuntuacion.innerHTML = "Casi casi...";
    }
    if (marcadorPuntuacion == 7.5) {
      divPuntuacion.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
      BtnOtraCartaCerrado();
    }
  }
};
const finalizarPartida = () => {
  let divPuntuacion = document.getElementById("score");

  if (
    divPuntuacion !== null &&
    divPuntuacion !== undefined &&
    divPuntuacion instanceof HTMLParagraphElement
  ) {
    if (marcadorPuntuacion > 7.5) {
      divPuntuacion.innerHTML = "GAME OVER";
      btnCerrado();
    }
  }
};

const dameCarta = () => {
  const carta = obtenerNumeroAleatorio();
  const urlCarta = obtenerUrlCarta(carta);
  pintarUrlCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntosCarta(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
  finalizarPartida();
};

const btnCoger = document.getElementById("btn-coger");
if (
  btnCoger !== null &&
  btnCoger !== undefined &&
  btnCoger instanceof HTMLButtonElement
) {
  btnCoger.addEventListener("click", dameCarta);
}

const otraCarta = () => {
  const carta = obtenerNumeroAleatorio();
  const urlCarta = obtenerUrlCarta(carta);
  pintarUrlCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntosCarta(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
};

const BtnOtraCarta = document.getElementById("btn-saber");
if (BtnOtraCarta && BtnOtraCarta instanceof HTMLButtonElement) {
  BtnOtraCarta.addEventListener("click", otraCarta);
}

const btnFinalizar = document.getElementById("btn-fin");
if (
  btnFinalizar !== null &&
  btnCoger !== undefined &&
  btnCoger instanceof HTMLButtonElement
) {
  btnFinalizar.addEventListener("click", plantarPartida);
}

function reinciarPartida() {
  reinicioPanel();
  reinicioMarcador();
  reinicioBotones();
  BtnOtraCartaCerrado();
  reiniciarLista();
  pintarUrlCarta(obtenerUrlBack());
}

const btnReiniciar = document.getElementById("btn-restart");
if (
  btnReiniciar !== null &&
  btnReiniciar !== undefined &&
  btnReiniciar instanceof HTMLButtonElement
) {
  btnReiniciar.addEventListener("click", reinciarPartida);
}
