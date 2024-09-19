
import {
    reinciarPartida,
    otraCarta,
    dameCarta,
  } from './motor'
  
  import {
  plantarPartida
  } from './ui'
  
  
  const btnCoger = document.getElementById("btn-coger");
  if (
    btnCoger !== null &&
    btnCoger !== undefined &&
    btnCoger instanceof HTMLButtonElement
  ) {
    btnCoger.addEventListener("click", dameCarta);
  }
  
  const BtnOtraCarta = document.getElementById("btn-saber");
  if (BtnOtraCarta && BtnOtraCarta instanceof HTMLButtonElement) {
   BtnOtraCarta.addEventListener("click", otraCarta);
  }
  
  const btnFinalizar = document.getElementById("btn-fin");
  if (
   btnFinalizar !== null &&
   btnFinalizar!== undefined &&
   btnFinalizar instanceof HTMLButtonElement
  ) {
   btnFinalizar.addEventListener("click", plantarPartida);
  }
  
  
  const btnReiniciar = document.getElementById("btn-restart");
  if (
    btnReiniciar !== null &&
    btnReiniciar !== undefined &&
    btnReiniciar instanceof HTMLButtonElement
  ) {
    btnReiniciar.addEventListener("click", reinciarPartida);
  }