// En el mismo archivo del ejercicio 2, modifica la función para que alerte al usuario cuando el parámetro no sea un array o este esté vacío.Si el parámetro es un array con más de un elemento, la función debe realizar lo descrito en el ejercicio anterior.

let cadena = [1, 2, 3, 4, 5, 6, 7];
let arrayVacio = [];
let num = 24;

function eliminarUltimo(array) {
  if (Array.isArray(array))
    if (array.length > 0) {
      array.pop();
      console.log(array);
    } else console.log("El array está vacío.");
  
  else console.log("No es del mismo tipo.");
}

eliminarUltimo(arrayVacio);

eliminarUltimo(num);

console.log(cadena);
eliminarUltimo(cadena);
