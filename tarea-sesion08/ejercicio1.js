// En este ejercicio tienes que crear varias funciones. Las funciones tienen que representar las operaciones básicas de una calculadora: sumar, restar, multiplicar y dividir.
// En la función de dividir, tendréis que realizar una comprobación para verificar que el segundo número no sea un 0, en el caso de que sea un 0 tendréis que mostrar el mensaje “No se puede dividir por cero”.
// Tienes que mostrar los resultados por consola.
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) =>  a * b; 

const dividir = (a, b) => {
  if (b === 0) {
    return `No se puede dividir para ${b}`;
  } else {
    return a / b;
  }
};

const suma = sumar(10, 12);
console.log(suma);

const resta = restar(100, 31);
console.log(resta);

const producto = multiplicar(2, 99);
console.log(producto);

const division = dividir(100, 0);
console.log(division);