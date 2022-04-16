// Crea un archivo "libreria.js" en el que implementes dos funciones:
// Una función saludar(String) que reciba como parámetro un nombre e imprima por consola "Hola, " + el parámetro.
// Otra función hora() que devuelva en el return la hora actual del sistema.
// Para la segunda función debes utilizar la librería "moment.js". Ambas funciones creadas deben ser exportadas para su posterior uso desde otro archivo Javascript.
import moment from "moment";

function saludar(nombre) {
    console.log(`Hola, ${nombre}!!`);
}

saludar("Carlos");

function hora(){
    
    const now = moment().format("DD/MM/YYYY, h:mm:ss a");
    console.log(now);
}

hora(new Date);

export {saludar, hora};