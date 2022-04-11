// En este ejercicio tendrás que generar 10 números aleatorios que estén comprendidos entre 0 y 20 haciendo uso de un bucle.

var numero = 1;
var i = 0;
while (i <= 9) {
   numero = Math.round(Math.random(numero) * 20);
   console.log(numero);
   i++; 
}