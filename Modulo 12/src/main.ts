import "./style.css";

console.log("Hello Typescript!");

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

class base {
  reservas: Reserva[];
  cargoAdicional: number;
  IVA: number;
  precioSuite: number;
  precioStandard: number;

  constructor(
    reservas: Reserva[],
    precioSuite: number,
    precioStandard: number
  ) {
    this.reservas = reservas;
    this.cargoAdicional = 40;
    this.IVA = 1.21;
    this.precioSuite = precioSuite;
    this.precioStandard = precioStandard;
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

class Tour extends base {
  descuento: number;
  constructor(reservas: Reserva[]) {
    super(reservas, 100, 100);
    this.descuento = 0.15;
  }
  calcularTotal(): number {
    return (
      (this.calcularSubtotal() - this.calcularSubtotal() * this.descuento) *
      this.IVA
    );
  }
}

class Particular extends base {
  constructor(reservas: Reserva[]) {
    super(reservas, 100, 120);
  }
}

let instanciaBase: base = new base(reservasClientes, 100, 120);
const paquitosAmigos: Tour = new Tour(reservasClientes);
const JoseAntonio: Particular = new Particular(reservasClientes);

console.log(instanciaBase.calcularSubtotal());
console.log(instanciaBase.calcularTotal());
console.log(paquitosAmigos.calcularSubtotal());
console.log(paquitosAmigos.calcularTotal());
console.log(JoseAntonio.calcularSubtotal());
console.log(JoseAntonio.calcularTotal());
