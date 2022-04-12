// En este ejercicio tienes que rellenar un array con los números del 10 al 20 y mostrarlo por consola.
let arr = [];
let num = 10;

for(let i = 0; i <= 10; i++){
    arr.push(num);
    console.log("Posicion " + i + " Número " + num)
    num++;
}

console.log("Array Final " + arr);