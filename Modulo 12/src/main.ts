import "./style.css";

console.log("Hello Typescript!");

// class Animal {
//   nombre: string;
//   edad: number;

//   constructor(nombre: string, edad: number) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }
//   hacerRuido() {
//     return "Algun sonido genérico";
//   }
//   duerme() {
//     return "ZzZZZzZZzzzzZz";
//   }
// }

// const paco = new Animal("paco", 2);
// console.log(paco.hacerRuido());
// console.log(paco.duerme());

// class Perro extends Animal {
//   raza: string;

//   constructor(nombre: string, edad: number, raza: string) {
//     super(nombre, edad);
//     this.raza = raza;
//   }
//   hacerRuido(): string {
//     return "woof";
//   }
// }

// const Moli = new Perro("Moli", 8, "Ratonero");
// console.log(Moli);
// console.log(Moli.hacerRuido());
// console.log(Moli.duerme());

// class Gato extends Animal {
//   raza: string;

//   constructor() {
//     super(nombre, edad);
//     this.raza = raza;
//   }
//   hacerRuido(): string {
//     return "Maiuuu";
//   }
// }

// const paquito = new Gato("Paquito", 1, "Siamés");
// console.log(paquito);
// console.log(paquito.hacerRuido());
// console.log(paquito.duerme());

// class totalesDescuento {
//   constructor(descuento) {
//     this.descuento = descuento;
//     this._subtotal = 0;
//     this.total = 0;
//   }

//   set subtotal(nuevoValor) {
//     this._subtotal = nuevoValor;
//     this.total = this._subtotal - (this.descuento * this._subtotal) / 100;
//   }
// }
// //Cuando usamos new estamos usando una instancia de la clase
// const totalPerfumeria = new totalesDescuento(10);
// const totalesSupermercado = new totalesDescuento(20);

// totalPerfumeria.subtotal = 30;
// console.log("Totales de perfumeria:", totalPerfumeria.total);

// totalesSupermercado.subtotal = 50;
// console.log("total de Supermercado:", totalesSupermercado.total);

interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

const reservasClientes: Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 2,
  },
];

class total {
  reservas: Reserva[];
  precioStandard: number;
  precioSuite: number;
  cargoAdicional: number;
  IVA: number;

  constructor(
    reservas: Reserva[],
    precioStandard: number,
    precioSuite: number
  ) {
    this.reservas = reservas;
    this.precioStandard = precioStandard;
    this.precioSuite = precioSuite;
    this.cargoAdicional = 40;
    this.IVA = 1.21;
  }

  calcularSubtotal() {
    let subtotal = 0;
    this.reservas.forEach((reserva) => {
      let totalReserva = 0;
      if (reserva.tipoHabitacion == "standard") {
        totalReserva = reserva.noches * this.precioStandard;
      }
      if (reserva.tipoHabitacion == "suite") {
        totalReserva = reserva.noches * this.precioSuite;
      }
      if (reserva.pax > 1) {
        totalReserva +=
          reserva.noches * (reserva.pax - 1) * this.cargoAdicional;
      }
      subtotal += totalReserva;
    });
    return subtotal;
  }

  calcularTotal() {
    return this.calcularSubtotal() * this.IVA;
  }
}

const totalDeReservas = new total(reservasClientes, 100, 150);
console.log("Subtotal:", totalDeReservas.calcularSubtotal());
console.log("Total:", totalDeReservas.calcularTotal());

class tourOperador extends total {
  descuento: number;

  constructor(reservas: Reserva[], descuento: number) {
    super(reservas, 100, 100);
    this.descuento = descuento;
  }

  calcularTotal(): number {
    return (
      (this.calcularSubtotal() - this.calcularSubtotal() * this.descuento) *
      this.IVA
    );
  }
}

const tourOperadorDeReservas = new tourOperador(reservasClientes, 0.15);
console.log("Subtotal:", tourOperadorDeReservas.calcularSubtotal());
console.log("Total:", tourOperadorDeReservas.calcularTotal());
