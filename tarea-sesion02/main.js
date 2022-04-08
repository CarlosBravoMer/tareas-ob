var variable = "Cadena de texto";

function cadena() {
  var variable = "Cadena de texto cambiada en la funcion";

  console.log(variable);
  return variable;
}

console.log(variable);
console.log(cadena());
