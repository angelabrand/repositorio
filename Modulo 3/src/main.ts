/*
La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
*/

const popRock = "🎵 Pop Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";
const rock = "🎸 Rock";
const estilosNombre = "font-size: 18px; font-weight: bold; background: green;";

interface Grupo {
  nombre: string;
  cantante?: string;
  compositor?: string;
  añoFundacion: number;
  enActivo: boolean;
  generoMusical: string;
}

const grupoA: Grupo = {
  nombre: "The Beatles",
  cantante: undefined,
  compositor: undefined,
  añoFundacion: 1960,
  enActivo: true,
  generoMusical: popRock,
};

const grupoB: Grupo = {
  nombre: "Queen",
  cantante: undefined,
  compositor: undefined,
  añoFundacion: 1970,
  enActivo: false,
  generoMusical: rock,
};

const grupoC: Grupo = {
  nombre: "AC DC",
  cantante: undefined,
  compositor: undefined,
  añoFundacion: 1973,
  enActivo: true,
  generoMusical: hardRock,
};

const grupoD: Grupo = {
  nombre: "Ludwig van Beethoven",
  cantante: undefined,
  compositor: "Ludwig van Beethoven",
  añoFundacion: 1770,
  enActivo: false,
  generoMusical: clasica,
};

const grupoE: Grupo = {
  nombre: "The Rolling Stones",
  cantante: undefined,
  compositor: undefined,
  añoFundacion: 1962,
  enActivo: true,
  generoMusical: rock,
};

console.log(`%c${grupoA.nombre}`, estilosNombre, grupoA);
console.log(`%c${grupoB.nombre}`, estilosNombre, grupoB);
console.log(`%c${grupoC.nombre}`, estilosNombre, grupoC);
console.log(`%c${grupoD.nombre}`, estilosNombre, grupoD);
console.log(`%c${grupoE.nombre}`, estilosNombre, grupoE);
