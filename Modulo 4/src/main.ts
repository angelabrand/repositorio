/* Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

A implementar:

Básico:
En grande se muestra el turno.
El operario puede ir dándole a siguiente o anterior y el turno cambia.
Además de esto vamos a añadir un botón de reset que pone el turno a 0.
Avanzado:
Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.
Challenge:
Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga como puedes formatear un número para que siempre tenga dos dígitos.
Pista: Puedes usar la función padStart, la cual nos ayuda a añadir ceros o cualquier otro carácter que queramos al principio de una cadena de texto..

Si lo implementas en TypeScript en modo estricto, mejor que mejor.*/

function cogerNumero() {
  let numeroTurno = document.getElementById("numero-turno");
  if (numeroTurno !== null && numeroTurno !== undefined) {
    return parseInt(numeroTurno.innerHTML);
  }
  return null;
}

function siguienteTurno() {
  let turnoActual = cogerNumero();
  if (turnoActual !== null) {
    let turnoSiguiente = turnoActual + 1;

    const resultadoElement = document.getElementById("numero-turno");

    if (resultadoElement !== null && resultadoElement !== undefined) {
      resultadoElement.innerHTML = String(turnoSiguiente);
      if (turnoSiguiente < 10) {
        resultadoElement.innerHTML = "0" + String(turnoSiguiente);
      } else {
        resultadoElement.innerHTML = String(turnoSiguiente);
      }
    }
  }
}

const botonSiguiente = document.getElementById("btn-siguiente-turno");
if (botonSiguiente !== null && botonSiguiente !== undefined) {
  botonSiguiente.addEventListener("click", siguienteTurno);
}

function anteriorTurno() {
  let turnoActual = cogerNumero();
  if (turnoActual !== null && turnoActual > 0) {
    let turnoAnterior = turnoActual - 1;

    const resultadoElement = document.getElementById("numero-turno");
    if (resultadoElement !== null && resultadoElement !== undefined) {
      if (turnoAnterior < 10) {
        resultadoElement.innerHTML = "0" + String(turnoAnterior);
      } else {
        resultadoElement.innerHTML = String(turnoAnterior);
      }
    }
  }
}

const botonAnterior = document.getElementById("btn-anterior-turno");
if (botonAnterior !== null && botonAnterior !== undefined) {
  botonAnterior.addEventListener("click", anteriorTurno);
}

function resetearContador() {
  const resultadoElement = document.getElementById("numero-turno");
  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = "00";
  }
}

const botonReset = document.getElementById("btn-reset");
if (botonReset !== null && botonReset !== undefined) {
  botonReset.addEventListener("click", resetearContador);
}
