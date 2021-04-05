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
}

stringInvert('Holaaaa');


console.log('=== Solución profe ejerc 5 ===');
  
const invertirCadena = (cadena = '') => { // El parámetro tiene un valor por defecto vacío
  (!cadena) // Si cadena es falsa
  ? console.log('No ingresaste una cadena')
  : console.log(cadena.split('').reverse().join(''));
  // Acá separo con split, invierto con reverse y vuelvo a unir con join
}

invertirCadena('Ola que ase');



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

const eliminarCaracteres = ( texto = "", patron = "" ) => 
  
  (!texto) // Si no ingreso un texto
   ? console.warn('No ingresaste un texto') // Entonces imprimir esto
   : (!patron) // o... Si no ingresó patrón
      ? console.warn('No ingresaste un patrón') // Entonces imprimir esto
      : console.info(texto.replace(new RegExp(patron, 'ig'), '')); // o... 
      //Reemplazar el texto (Primer parametro expresion regular con el patron, segundo parametro con que se reemplaza)
      // ig: bandera i no discrimina entre mayus y minus, bandera g hace que no se detenga en el primer patrón
      
    eliminarCaracteres();
    eliminarCaracteres('xyz1, xyz2, xyz3, xyz4');
    eliminarCaracteres('xyz1, xyz2, xyz3, xyz4', 'xy');


/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

console.log('=== Ejercicio 9 ===')

const randomNum = (min, max) => { // Los parametros definen el rango
  let rangeNum = max - min; // Rango = mayor - menor
  let randomNum = Math.random() * (rangeNum + 1); // Multiplico el rango por el aleatorio dado por Math.random
  randomNum = Math.round(randomNum); // Redondeo el numero con round
  console.log(min + randomNum); // Sumo desde el numero inferior para que arranque desde el rango
}

randomNum(501, 600);

/* 10) Programa una función que reciba un número y evalúe si es 
capicúa o no (que se lee igual en un sentido que en otro), pe.
miFuncion(2002) devolverá true. */

console.log('=== Ejercicio 10 ===')

const equalNum = (n) => {
  let numberIn = n; // recibo el numero del parametro como valor de la variable

  if ( typeof numberIn === 'number' && numberIn !== 0 ){
    let strInv = numberIn.toString().split('').reverse().join(''); // convierto el numero a string, lo separo, li invierto y lo uno de nuevo
    let numInv = parseInt(strInv); // el string invertido lo convierto en numero
    console.log(`El numero ingresado fue ${numberIn} invertido es ${numInv}`);

    (numberIn === numInv) // Operador ternario Si el original es igual al invertido entonces...
    ? console.log(true)
    : console.warn(false)

  } else {
    console.log('No ingresaste un número');
  }
}
equalNum(5775);

/* 11) Programa una función que calcule el factorial de un número (El 
  factorial de un entero positivo n, se define como el producto de todos 
  los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
console.log('=== Ejercicio 11 ===');

const factorial = (n) => { // Parametro define el numero
  let facNum = n

  if (typeof facNum === 'number' && facNum > 0 && facNum !== 0 ) {

    for (let i = n-1; i > 0; i--){ // Ciclo donde i = numero - 1 (para que no se multiplique con el mismo) y i-- decrece hasta 1
       n *= i; // n = n *1 (n = 5 * 4, 20 * 3, 60 * 2, 120 * 1
       // n = n * i
       console.log(n)
     }
  } else {
    console.log('No ingresaste un número');
  }
}

factorial(5);


/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no,
pe. miFuncion(7) devolverá true. */
console.log('=== Ejercicio 12 ===');

/* function primo(numero) {

  console.log("Has pasado el numero: " + numero);
  console.log("Inicio bucle desde 2 hasta " + (numero - 1));

  for (var i = 2; i < numero; i++) {

    console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));

    if (numero % i === 0) {
      console.log(i + " es un multiplo de " + numero);
      console.log(numero + " no es un numero primo porque " + i + " es un multiplo");
      return false;
    }

  }

  if (numero === 1) {
    console.log("Me has pasado el numero 1, recuerda que NO es un numero primo");
  } else {
    console.log("Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo.");
  }

  console.log("-------------------------------------");
}

primo(7); */

console.log('===Ejercicio profe=');

const numeroPrimo = (numero = undefined) => {

  // Validaciones
  // Si no ingresa nada
  if (numero === undefined) return console.warn('No ingresaste un número');
  
  // Si no ingresa un número
  if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un número`);

  // Numeros NO permitidos
  if (numero === 0) return console.error('El numero no puede ser 0');
  if (numero === 1) return console.error('El numero no puede ser 1');

  // Con el método sign valido si es negativo o positivo
  if (Math.sign(numero) === -1) console.error('El numero no puede ser negatigo');
  
  // Si divisible es false el numero no es primo
  let divisible = false;

  for(let i = 2; i < numero; i++ ){ // Inicio el ciclo con i valiendo 2
    if(numero % i === 0){ // Si el residuo de numero / 2 es 0
      divisible = true; // Entonces divisible pasa a true, si es diviisible entre 2 NO es primo
      break; // El break para el ciclo cuando encuentre un i que divida exactamente a número
    }
  }

  return (divisible) // Osea, si divisible tiene su valor origninal (false)
  ? console.log(`El número ${numero} NO es primo`)
  : console.log(`El número ${numero} SI es primo`)
}

numeroPrimo(15);

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
console.log('=== Ejercicio 13 ===');

const parImpar = (n) => {
  let numPar = n;

  if( typeof numPar === 'number' && numPar !== undefined){
      (numPar % 2 === 0)
      ? console.log(`el número ${numPar} es Par`)
      : console.log(`el número ${numPar} es Impar`)
  } else {
    console.warn('Debes ingresar un número')
  }
}

parImpar(4);

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
  pe. miFuncion(0,"C") devolverá 32°F. */
console.log('=== Ejercicio 14 ===');

const conversor = (g, t) => {

  if( typeof g === 'number' && typeof t === 'string'){
    console.log(g, t)
    if( t === 'C' ){
      let toFaren =  (g * 1.8) + 32;
      console.log(`${g} grados celcius, son ${Math.round(toFaren)} grados farenheit`);
    } else if ( t === 'F' ) {
      let toCelci =  (g - 32) / 1.8;
      console.log(`${g} grados Farenheit, son ${Math.round(toCelci)} grados celcius`);
    } else if (t !== 'C' || t !== 'F') {
      console.warn('Valor de unidad no reconocido');
    }

  } else {
    console.log('El primero debe ser un número y el 2do debe ser la letra C o F')
  }

}

conversor(100, 'F');


/* 15) Programa una función para convertir números de base binaria a decimal
 y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
 console.log('=== Ejercicio 15 ===');

 console.log(Math.pow(2, 3));
 const binary = (n = undefined, b = undefined) =>{
  let numberToConvert = n;
  let numberBase = b;

  if( numberBase === 2 ){ // Si la base es 2 voy a convertir binarios
    console.log('Vas a pasar un binario a decimal');
    
    let numsArray = Array.from(String(numberToConvert), Number); // convierto el numero en un array de numeros
    console.log(numsArray);

    let numsRevert = numsArray.reverse(); // Invierto el array
    console.log(numsRevert);

    numsRevert.forEach(function (el, index){ // Con un forEach sincronizo el indice del array con la exponencia a multiplicar 
      
    let testFirt = numsRevert[index] * Math.pow(2,index);
    if ( numsRevert[index] !== 0 ) {
      console.log(`Este es el index: ${index} y este el elemento ${el}`)
      console.log(testFirt); // Omito los que se multiplican con 0
    }
    
    });
  
  } else if ( numberBase === 10) { // Si la base es 10 voy a convertir decimales
    console.log('Vas a pasar un decimal a binario');
  }
 }

 binary(10010011, 2)
 
 



/* 16) Programa una función que devuelva el monto final después de aplicar 
un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */
console.log('=== Ejercicio 16 ===');

const discount = (p = undefined, d = undefined) => {

  let price = p;
  let discount = d;

  // Si no ingresa nada
  if (price === undefined || price === undefined) return console.warn('No ingresaste un Valor, o un descuento');
  
  // Si no ingresa un número
  if (typeof price !== 'number') return console.warn(`El valor ${price} no es un número`);
  if (typeof discount !== 'number') return console.warn(`El valor ${discount} no es un número`);
  if (price <= 0) return console.warn(`El valor ${price} no pudede ser menor o igual a 0`);

  let discountValue = (price*discount) / 100;
  let totalPrice = price - discountValue;
  return console.log(`El descuento del ${discount}% sobre ${price} da como total un precio de ${totalPrice}`);
}

discount(100, 20);


/* 17) Programa una función que dada una fecha válida determine cuantos años
 han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
 devolverá 35 años (en 2020). */

 console.log('=== Ejercicio 17 ===');

 const yearCounter = (a = undefined, m = undefined, d = undefined) => {

  if (a === undefined || typeof a !== 'number') console.warn('El valor a no puede ser indefinido y debe ser un número');
  if (m === undefined || typeof m !== 'number') console.warn('El valor m no puede ser indefinido y debe ser un número');
  if (d === undefined || typeof d !== 'number') console.warn('El valor d no puede ser indefinido y debe ser un número');

  let today = new Date().getFullYear();
  console.log(today);
  
  let randomDate = new Date(a, m, d).getFullYear();
  console.log(randomDate);

  if(randomDate < today){
    let CurrentTime = today - randomDate;
    console.log(`Entre ${randomDate} y ${today} han pasado ${CurrentTime} años`);
  } else if (randomDate > today){
    let CurrentTime = randomDate - today;
    console.log(`Entre ${today} y ${randomDate} pasarán ${CurrentTime} años`);
  }
  
 }

 yearCounter(1986, 2, 2); // Solo el mes se lee como array con base 0