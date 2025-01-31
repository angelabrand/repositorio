import { LineaTicket, ResultadoLineaTicket } from "./model";

export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

const crearResultadoLineaDeTicket = (
  lineaTicket: LineaTicket,
  IVA: number
): ResultadoLineaTicket => ({
  nombre: lineaTicket.producto.nombre,
  cantidad: lineaTicket.cantidad,
  precionSinIva: lineaTicket.producto.precio,
  tipoIva: lineaTicket.producto.tipoIva,
  precioConIva: lineaTicket.producto.precio + lineaTicket.producto.precio * IVA,
});

export const calculaTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  if (!lineasTicket) {
    throw new Error("no es valido");
  }

  let listaResultadoLineaTicket: ResultadoLineaTicket[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {
    let lineaTicket = lineasTicket[i];

    if (lineaTicket.producto.tipoIva === "general") {
      listaResultadoLineaTicket.push(
        crearResultadoLineaDeTicket(lineaTicket, 0.21)
      );
    }
    if (lineaTicket.producto.tipoIva === "reducido") {
      listaResultadoLineaTicket.push(
        crearResultadoLineaDeTicket(lineaTicket, 0.1)
      );
    }
    if (lineaTicket.producto.tipoIva === "superreducidoA") {
      listaResultadoLineaTicket.push(
        crearResultadoLineaDeTicket(lineaTicket, 0.05)
      );
    }
    if (lineaTicket.producto.tipoIva === "superreducidoB") {
      listaResultadoLineaTicket.push(
        crearResultadoLineaDeTicket(lineaTicket, 0.04)
      );
    }
    if (
      lineaTicket.producto.tipoIva === "superreducidoC" ||
      lineaTicket.producto.tipoIva === "sinIva"
    ) {
      listaResultadoLineaTicket.push(
        crearResultadoLineaDeTicket(lineaTicket, 0)
      );
    }
  }
  return listaResultadoLineaTicket;
};

calculaTicket(productos);
