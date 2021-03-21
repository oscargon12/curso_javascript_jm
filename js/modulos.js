console.log('Archivo modulos.js');

import saludar, { PI, Saludar, usuario } from "./constantes.js"; // Prettier me trae por defecto la funcion default
// Lo importado por defecto entra por fuera de la destructuración 
// Lo importado normal se usa destructuring {}

import { aritmetica as calculos } from "./aritmetica.js";
// con el 'as' Le puedo poner un alias al objeto importado


console.log(PI)
console.log(usuario)

console.log(calculos.sumar(3,4)); // Acá llamo el alias
//password;
saludar();

// Acá instancio la clase saludo
let saludo = new Saludar();
saludo; // no es necesario el console porque es automático con la instancia

