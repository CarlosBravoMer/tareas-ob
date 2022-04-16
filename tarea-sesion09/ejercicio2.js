// En el mismo archivo del ejercicio anterior ("ejercicio.js"), debes hacer uso de la función suma(a, b) que acabas de crear y proteger tu código para que, intencionadamente, podamos pasar un parámetro que no sea un número sin que salte un error que finalice el programa.
// En el catch, puedes poner un mensaje de aviso indicando que ese no es el uso correcto de la función.

function sumar(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Uso no correcto de la función");
    return a + b;
  } catch (e) {
    return e.message;
  }
}

console.log(sumar(12, []));
console.log(sumar("123", 123));
console.log(sumar(13, 69));
