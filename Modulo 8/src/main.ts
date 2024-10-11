type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    let paciente: Pacientes = pacientes[i];
    if (paciente.especialidad === "Pediatra") {
      pacientesPediatria.push(paciente);
    }
  }
  return pacientesPediatria;
};

const pacientePediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientePediatria);

//Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatriaMenores: Pacientes[] = [];
  
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaMenores.push(pacientes[i]);
    }
  }
  return pacientesPediatriaMenores;
};

const pacientesPediatriaMenores =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesPediatriaMenores);

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    const pacientesUrgencia = pacientes[i];
    if (
      pacientesUrgencia.temperatura > 39 &&
      pacientesUrgencia.frecuenciaCardiaca > 100
    ) {
      activarProctolo = true;
      return activarProctolo;
    }
  }

  return activarProctolo;
};
console.log(activarProtocoloUrgencia(pacientes));

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {

    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
  }
  return pacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes = true;
  for (let i = 0; i < pacientes.length; i++) {
  
    if (pacientes[i].especialidad === "Pediatra")
    hayPacientes = true;
     break
  }
  return hayPacientes;
};
console.log(HayPacientesDePediatria(pacientes));

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const pacientePorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia : 0,
    pediatria: 0,
    cardiologia: 0
  }
 for (let i = 0; i < pacientes.length; i++) {
  if(pacientes[i].especialidad === "Medico de familia"){
    pacientePorEspecialidad.medicoDeFamilia++
  }
  if(pacientes[i].especialidad === "Pediatra"){
    pacientePorEspecialidad.pediatria++
  }
  if(pacientes[i].especialidad === "Cardiólogo"){
    pacientePorEspecialidad.cardiologia++
  }
 }
    
  return pacientePorEspecialidad
};
console.log(cuentaPacientesPorEspecialidad(pacientes))