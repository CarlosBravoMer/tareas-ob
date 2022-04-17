// En este ejercicio tendréis que crear la clase figura que tiene que tener como atributo _color

// El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.

// Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).

class Figura{
    constructor(color){
        this._color = color;
    }

    get color(){
        return `EL color es ${this._color}`;
    }

    set color(color){
        this._color = color;
    }
}

const newColor = new Figura("red");
console.log(newColor.color);
newColor.color = "azul";
console.log(newColor.color);

export {figura};