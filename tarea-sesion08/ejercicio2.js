// En este ejercicio tienes que crear un archivo javascript que contenga una función llamada eliminarUltimo() que reciba como parámetro un array y elimine el último elemento de este.
let cadena = [1, 2, 3, 4, 5, 6, 7];

function eliminarUltimo(array) {
  array.pop();
  console.log(array);
}

console.log(cadena);
eliminarUltimo(cadena);
