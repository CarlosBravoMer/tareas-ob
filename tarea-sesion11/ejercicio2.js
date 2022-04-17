// En este segundo ejercicio tendréis que crear dos clases:
// Circulo
// Rectángulo
// las cuales deben de heredar de Figura.
// Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).
// Rectángulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).
// Los atributos de estas clases deben ser públicos.

class Figura{
    constructor(color){
        this.color = color;
    }
}
class Circulo extends Figura{
    constructor(radio){
        super();
        this.radio = radio;
    }
}

class Rectangulo extends Figura{
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }
}

const circle = new Circulo()
circle.color = "rosa"
circle.radio = 24;
console.log(circle)

const rectangle = new Rectangulo()
rectangle.color = "negro";
rectangle.base = 12;
rectangle.altura = 25;
console.log(rectangle)