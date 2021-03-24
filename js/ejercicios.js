/* 1) Programa una función que cuente el número de caracteres de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá 10.
*/

console.log('=== Ejercicio 1 ===')
const charCounter = (str) => {
  let cadena = str;
  
  if (typeof cadena === 'string' && cadena.length > 0){
    console.log(`El valor de cadena es ${cadena}`);
    console.log(`la cantidad de caracteres es ${cadena.length}`);
  } else {
    console.log('El tipo de dato No es un string, o no ingresaste uno')
  }
}
charCounter('Holaaaa');

// Ejercicio 1 profe
console.log('=== Ejercicio 1 profe ===')

const contarCaracteres = ( cadena = "" ) => // Le doy un valor vacío por defecto a cadena
(!cadena) // = Si cadena es vacía
?console.warn('No ingresaste una cadena') //Con operador ternario establezco las opciones
: console.info(`la cadena tiene ${cadena.length} caracteres`)

contarCaracteres('Hola que hace');

// === Ejercicio 2 ===
/* 2) Programa una función que te devuelva el texto recortado según el número
 de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
console.log('=== Ejercicio 2 ===')

const charCutter = (str, n) => {
  let cadena2 = str;

  if (typeof cadena2 === 'string'){
    //console.log('Es cadena2');
    
    let strCutter = cadena2.slice(0,n);
    console.log(strCutter)
  } else {
    console.log('No es una cadena')
  }
}

charCutter('Hamburguesa', 7);

// === Ejercicio 3 ===
/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
console.log('=== Ejercicio 3 ===')

const wordSpacer = (str) => {

  let phrase1 = str;

  if ( typeof phrase1 === 'string' ){
    let apart = phrase1.split(' ');
    console.log(apart);
  } else {
    console.log('No es una cadena');
  }
}

wordSpacer('Quiero comer hamburguesas');


/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo. */
console.log('=== Ejercicio 4 ===')

const wordRepeat = (str, n) => {
  let phrase2 = str;

  let allPhrase = phrase2.repeat(n);
  console.log(allPhrase);

}

wordRepeat('Ciclo repetido || ', 3);


// === Ejercicio 5 ===
console.log('=== Ejercicio 5 ===')
/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const stringInvert = (str) => {
  let cadena3 = str;


  if (typeof cadena3 === 'string' && cadena3.length > 0){
    let cadenaSeparada = cadena3.split('');
    let cadenaRevertida = cadenaSeparada.reverse();
    console.log(cadenaRevertida);
  } else{
      console.log('No ingresaste una cadena');
  }

  /*   (typeof cadena3 === 'string' && cadena3.length > 0)
  ?console.log(let cadenaRevertida = cadena3.reverse())
  :console.warn('No sirve')

  console.log(cadenaRevertida) */

}

stringInvert('Holaaaa');



/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
console.log('=== Ejercicio 6 ===')

const repWords = (phrase, word) => {
  let cadena4 = phrase;

  let cadenaSeparada = cadena4.split(' ');
  console.log(cadenaSeparada)
  let repetidos = {}; // Array asociativo

  cadenaSeparada.forEach(function(n){
    repetidos[n] = (repetidos[n] || 0) + 1; // Construcción de array asociativo
  });

console.log(repetidos);

}

repWords('hola mundo, hola');

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */
console.log('=== Ejercicio 7 ===')

const palindrome = (str) => {
  let cadena3 = str;

  if (typeof cadena3 === 'string' && cadena3.length > 0){
    let cadenaSeparada = cadena3.split('');

    let cadenaRevertida = [...cadenaSeparada].reverse(); // Creo un nuevo array con spread operator, distinto del ejercicio 5
    console.log(cadenaSeparada, cadenaRevertida);
    
    let stringSeparada = cadenaSeparada.toString(); // convierto los array en string
    let stringRevertida = cadenaRevertida.toString();
    console.log(stringRevertida, stringSeparada);
    (stringSeparada === stringRevertida) ?console.log(true) :console.warn(false) //Condicional con operador ternario
  } else{
      console.log('No ingresaste una cadena');
  }
}

palindrome('anitalavalatina');

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
console.log('=== Ejercicio 8 ===')

const repeatChar = (str, p) => {
  console.log('Hola2');
}

repeatChar();