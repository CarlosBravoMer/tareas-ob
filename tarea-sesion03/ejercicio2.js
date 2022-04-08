/*En este segundo ejercicio, tendréis que crear un bucle 
que haga 10 iteraciones y en cada una indique el número de esta. 
Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo". */

var c = 10;
var j = 1;

for (j = 1; j <= c; j++) {
  if (primo(j)) {
    console.log(j + " Es primo");
  } else {
    console.log("Es la iteracion numero " + j);
  }
}

function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return numero !== 1;
}
