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
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};
let pacientePediatria: Pacientes []= obtenPacientesAsignadosAPediatria(pacientes)
console.log(pacientePediatria)


const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => { 
   return pacientes.filter((paciente)=> pacientePediatria && paciente.edad < 10)}

 console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))


  


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
     activarProctolo = pacientes.some((paciente)=> paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100) 
      return activarProctolo
    }
  
console.log(activarProtocoloUrgencia(pacientes))

 

  const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => { 
    return pacientes.map((paciente) => {
      if (paciente.especialidad === "Pediatra") {
        return { ...paciente, especialidad: "Medico de familia" };
      }
      return paciente;
    });
  }
  console.log(reasignaPacientesAMedicoFamilia(pacientes))

    const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
   return pacientes.every((paciente) => (paciente.especialidad === "Pediatra"))
    };
    console.log(HayPacientesDePediatria(pacientes))