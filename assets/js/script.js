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

console.log(posicion);

//---------------
// EJERCICIO 2 - ARREGLO DE COLORES
const colores = ["red", "blue", "green", "yellow", "purple", "black", "brown"];

console.log(colores);

function cambiarColor() {
  const posicion = 6;

  console.log(colores[posicion]);

  // cambia color del background
  document.body.style.backgroundColor = colores[posicion];
}

//---------------
// EJERCICIO 2 - ARREGLO DE COLORES - con select

const select = document.getElementById("select");

select.addEventListener("change", () => {
  document.body.style.backgroundColor = colores[select.value];
});
// select.value → obtiene el valor seleccionado ("0", "1", etc.)

// colores[select.value]
// Usa ese valor como posición del arreglo

// Ejemplo:
// Si elige "3"
// colores[3] = "yellow"