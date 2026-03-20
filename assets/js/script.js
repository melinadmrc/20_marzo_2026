// EJERCICIO CON PROFE
const arreglo = [];
const lista_de_pendientes = ["comida", "tarea", "lavar", "imprimir"];

console.log(arreglo);
console.log(lista_de_pendientes);

// [] corchetes
// {} llaves

arreglo[0] = "hola";
arreglo[1] = 5;
arreglo[2] = 5678;
arreglo[3] = "Auxilio000";

console.log(arreglo);
console.log(lista_de_pendientes[3]);

//-----------------
// EJERCICIO 1 - LISTA NOMBRES
const nombres = [
  "Elisabete",
  "Mario",
  "Jaume",
  "Jesus",
  "Neuza",
  "Priscila",
  "Carlos",
  "Fernando",
  "Melina",
];

console.log(nombres);

// indexOf() → busca un valor en un array
const posicion = nombres.indexOf("Melina");

console.log("Melina");

//---------------
// EJERCICIO 2 - ARREGLO DE COLORES
const colores = [];

// agregar valores posición - color
colores[0] = "red";
colores[1] = "blue";
colores[2] = "green";
colores[3] = "yellow";
colores[4] = "purple";
colores[5] = "black";
colores[6] = "brown";

console.log(colores);

function cambiarColor() {

  const posicion = 4;

  console.log(colores[posicion]);

  // cambia color del background
  document.body.style.backgroundColor = colores[posicion];
}
