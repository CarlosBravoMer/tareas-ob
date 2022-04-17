// Como último ejercicio, tendréis que crear un método calcularArea() en la clase Figura que devuelva el valor -1 para indicar que nuestra figura genérica no tiene área.
// Implementa ese mismo método en las clases Circulo y Rectángulo que devuelvan el área de la figura en base a sus atributos.
// Para calcular el área del círculo, PI puede ser 3.14 simplemente, sin más decimales.

class Figura{
    constructor(color){
        this.color = color;
    }

    calcularArea(){
        return -1;
    }
}
class Circulo extends Figura{
    constructor(radio){
        super();
        this.radio = radio;
    }

    calcularArea(){
        return (3.14 * this.radio);
    }
}

class Rectangulo extends Figura{
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

const circle = new Circulo();
circle.color = "Marron";
circle.radio = 24
console.log(circle);
console.log(circle.calcularArea());

const rectangle = new Rectangulo();
rectangle.color = "Rosa";
rectangle.base = 24;
rectangle.altura = 10;
console.log(rectangle);
console.log(rectangle.calcularArea());
