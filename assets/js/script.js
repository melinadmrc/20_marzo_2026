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
// ARRAY → lista de colores en inglés
const colores = ["red", "blue", "green", "yellow", "purple"];

// FUNCIÓN → se ejecuta al hacer click
function cambiarColor() {
  // POSICIÓN → elegimos el color (0, 1, 2, 3)
  const posicion = 3;

  // Cambia el fondo del body
  document.body.style.backgroundColor = colores[posicion];
}
console.log("Wiiii=)")

