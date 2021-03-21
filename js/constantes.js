export const PI = Math.PI;

// No tengo que exportar todo, solamente lo que necesite
export let usuario = 'Oscar';

// Si quiero exportar por default, la exportación la hago desde el llamado de la variable
// no desde la declaración
let password = 'qwerty';
//export default password;
// Las funciones y clases si dejan export default desde la declaracion

// El export default hace que la función se vaya por defecto al modulos
// Solo se puede haber un default
export default function saludar() {
    console.log('Hola modulos ES6');
}

// No funciona con arrow functions
//export default const saludar = () => console.log('Hola modulos ES6')

export class Saludar {
    constructor(){
        console.log('Hola 2');
    }
}