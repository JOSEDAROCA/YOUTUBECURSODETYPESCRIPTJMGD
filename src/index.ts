import "./styles.css";

let valor1: number = 1;
let valor2: number = 4;

function sumar(valor1: number, valor2: number) {
  return valor1 + valor2;
}

console.log(sumar(valor1, valor2));

///TIPOS DE DATOS:
/// PRIMITIVOS = (string "xxxx"; number 123; boolean true false; null; undefined)

let vehiculo;
let cantidad;
let condicion;

let vehiculo1: string;
let cantidad2: number;
let condicion3: boolean;

vehiculo = "ford";
cantidad = 3;
condicion = true;

vehiculo1 = "Fiat";
cantidad2 = 4;
condicion3 = false;

console.log(vehiculo);
console.log(vehiculo1);
console.log(cantidad);
console.log(cantidad2);
console.log(condicion);
console.log(condicion3);

///TIPOS DE DATOS:
/// NO PRIMITIVOS = Tipo OBJETO "OBJETS"
// se declaran entre {} por ejemplo {Atributo1, Atributo2, etc}

let personas = { nombre: "Agustin", apellido: "Garcia", edad: 22 };

console.log(personas);

let personasCompleto: {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: {
    calle: string;
    numeracion: number;
  };
} = {
  nombre: "Aldo",
  apellido: "Gomez",
  edad: 33,
  direccion: {
    calle: "Olazabal",
    numeracion: 322
  }
};

console.log(personasCompleto);
console.log(personasCompleto.nombre);
console.log(personasCompleto.apellido);
console.log(personasCompleto.edad);
console.log(personasCompleto.direccion);

let personasTs = {
  nombre1: "Oscar",
  apellido2: "Velez",
  edad3: 22,
  direccion2: {
    calle: "Libertad",
    numeracion: 965
  }
};

console.log(personasTs);
console.log(personasTs.nombre1);
console.log(personasTs.apellido2);
console.log(personasTs.edad3);
console.log(personasTs.direccion2);

///TIPOS DE DATOS:
/// NO PRIMITIVOS = Tipo  "ARRAYS" [1,2,3] [Pablo, Juan, Aldo]
// se declaran entre [] por ejemplo [dato1, dato2, etc]

let personasTsCursos = {
  nombre1: "Belen",
  apellido2: "Araoz",
  edad3: 22,
  direccion2: {
    calle: "Acevedo",
    numeracion: 1965
  },
  cursos: [`piano`, `gutarra`, `tambor`]
};

let hobbies = [`padle`, `ski`, `cartas`];

console.log(personasTsCursos);
console.log(hobbies);

for (const hobbie of hobbies) {
  console.log(hobbie.toLocaleUpperCase());
}

//TIPOS DE DATOS:
/// NO PRIMITIVOS = Tipo  "TUPLES O TUPLAS"
// se declaran entre [] restringen el  tipo d dato y su posicion en la serie de datos
//por ejemplo [string, number, string] o [number, number, number] [Ford,2,rojo] [3, 34, 12]

type vehiculoType = [string, number, string];
let automovil: vehiculoType = [`Mazda`, 2020, `4x4`];
let moto: vehiculoType = [`Honda`, 2000, `verde`];
let bicicleta: vehiculoType = [`Monza`, 2020, `cross`];

console.log(automovil);
console.log(moto);
console.log(bicicleta);

let vehiculos = {
  marca: ``,
  modelo: ``,
  tipo: ``
};
console.log(vehiculos);

//TIPOS DE DATOS:
/// NO PRIMITIVOS = Tipo  "ENUMS"
// se declaran entre [] restringen el  tipo d dato y su posicion en la serie de datos
//por ejemplo [string, number, string] o [number, number, number] [Ford,2,rojo] [3, 34, 12]

enum role {estudiante, profesor};

let personasTsCursos2 = {
  nombre1: "Carla",
  apellido2: "Armenia",
  edad3: 22,
  direccion2: {
    calle: "lara",
    numeracion: 194
  },
  cursos: [`piano`, `gutarra`, `tambor`]
  role: role.profesor
};

console.log(personasTsCursos2);

