// Modifica el archivo del ejercicio anterior para que los atributos sean privados y tengan sus correspondientes getters y setters.

class Coche {
    constructor(peso, potencia, marca){
    this._peso = peso;
    this._potencia = potencia;
    this._marca = marca;

    console.log(`Peso ${peso}kg, ${potencia} caballos y Marca ${marca}`);

    this.getPeso = function() {
        return this._peso;
    }
    this.setPeso = function(peso) {
        this._peso = peso;
    }
    this.getPotencia = function() {
        return this._potencia;
    }
    this.setPotencia = function(potencia) {
        this._potencia = potencia
    }
    this.getMarca = function() {
        return this._marca;
    }
    this.setMarca = function(marca) {
        this._marca = marca;
    }
}}

let coche = new Coche(1200, 140, "Audi");

module.exports = {Coche};
