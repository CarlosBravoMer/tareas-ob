// Crea un archivo "ejercicio.js" que contenga una función sumar(a, b) que reciba dos parámetros y devuelva la suma de estos.
// En caso de que uno de los parámetros no sea un número, la función debe lanzar un error que indique el problema.


function sumar(a, b)
{
  try {
      if(typeof(a) !== 'number' || typeof(b) !== 'number')    
        throw new Error ("Error")
      return a + b;
  } catch(e) {
      return e;
  }
}