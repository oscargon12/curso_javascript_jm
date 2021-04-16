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

  if (n === undefined) console.warn('No ingresaste un número');
  if (n === undefined) console.warn('No ingresaste una base');
  if (typeof n !== 'number') console.warn('Lo que ingresaste no es un número');
  if (typeof b !== 'number') console.warn('Lo que ingresaste no es una base');
  
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

 console.log('== Solución profe ==');

 const binarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) console.warn('Hey no ingresaste un número');
  if (base === undefined) console.warn('Hey no ingresaste una base');
  if (typeof numero !== 'number') console.warn('Lo que ingresaste no es un número');
  if (typeof base !== 'number') console.warn('Lo que ingresaste no es una base');

  if (base === 2){
    console.log('convirtiendo de binario a decimal');
    
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    // Esto hace todo solo, con el parseInt y dos argumentos numero y base 😑
    // Originalmente el parseInt convierte de string a numero
  } else if (base === 10) {
    console.log('Convirtiendo de decimal a binario');
    return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
  } else {
    console.warn('El tipo de base no es válido');
  }
 }
 
binarioDecimal(100, 2); 
binarioDecimal(10010011, 2); 
binarioDecimal(114, 10); 

/* 16) Programa una función que devuelva el monto final después de aplicar 
un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */
console.log('=== Ejercicio 16 ===');

const discount = (p = undefined, d = 0) => {
// El descuento queda en cero po

  let price = p;
  let discount = d;

  // Si no ingresa nada
  if (price === undefined) return console.warn('No ingresaste un Valor, o un descuento');
  
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

  let today = new Date().getFullYear(); // getFullYear sin parámetros me da la fecha actual
  console.log(today);
  
  let randomDate = new Date(a, m, d).getFullYear(); // getFullYear con parametros me da la fecha que yo defina
  console.log(randomDate);

  if(randomDate < today){ // Si la fecha random es menor a la actual
    let CurrentTime = today - randomDate;
    console.log(`Entre ${randomDate} y ${today} han pasado ${CurrentTime} años`);
  } else if (randomDate > today){ // Si la fecha random es mayor a la actual
    let CurrentTime = randomDate - today;
    console.log(`Entre ${today} y ${randomDate} pasarán ${CurrentTime} años`);
  } else {
    console.log('No hay diferencia de años')
  }
  
 }

 yearCounter(1986, 2, 2); // Solo el mes se lee como array con base 0


 console.log('== Solución Profe ==')

 const calcularAnios = (fecha = undefined) => {

  if (fecha === undefined) return console.log('No ingresaste fecha');

  if (!(fecha instanceof Date)) return console.warn('No ingresaste una fecha válida');
  // 👆 Esto valida el tipo fecha, ya que con el typeOf solo valida si es un objeto

  let diferenciaFecha = new Date().getTime() - fecha.getTime(), // Esto saca la diferencia entre hoy y una fecha determinada
      aniosEnMS = 1000 * 60 * 60 * 24 * 365,
      // 1000 milisegundos es un segundo * 60 segundos * 60 minutos * 24 horas * 365 días nos da los años
      aniosHumanos = Math.floor(diferenciaFecha / aniosEnMS); // Años humanos = diferencia de años en timeStamp / años en milisegundos
   
    return (Math.sign(aniosHumanos) === -1)
      ? console.log(`Faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullYear()}`)
      : (Math.sign(aniosHumanos) === 1)
        ? console.log(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
        :console.log(`Estamos en el año actual ${fecha.getFullYear()}`)
 }

 calcularAnios(new Date(1986,2,3));
 calcularAnios(new Date(2086,2,3));

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

console.clear();
console.log('=== Ejercicio 18 ===');

const getVowels = (str = undefined) => {

  if (str === undefined) console.warn('No ingresaste nada');
  if ( typeof str !== 'string') console.warn('No ingresaste texto');

  let vowelNum = (str.match(/[aeiouáéíóú]/gi) || "").length;
  let consoNum = (str.match(/([b-d]|[f-h]|[j-n]|[p-t]|[v-z])/gi) || "").length;

  console.log(`Vocales ${vowelNum}`);
  console.log(`Consonantes ${consoNum}`);

}
getVowels("");
getVowels("Hola mundo");
getVowels("Murcielago");

/* 19) Programa una función que valide que un texto sea un nombre válido,
pe. miFuncion("Jonathan MirCha") devolverá verdadero. */
console.log('=== Ejercicio 19 ===');

const nameValidation = (name = undefined) => {
  let cadena = name

  if ( name === undefined ) return console.log('No has ingresado nada')
  if ( typeof name !== 'string' ) return console.log('No ingresaste un texto')

  let expReg2 = /^[a-zA-Z\s ]+$/;
  let wordVal = expReg2.test(cadena);
  console.log(wordVal);
  
  (wordVal) 
  ? console.log(`${cadena} Si es un nombre`)
  : console.log(`${cadena} NO es un nombre`)
  
}

nameValidation();
nameValidation(3);
nameValidation('Oscar');


/* 20) Programa una función que valide que un texto sea un email válido,
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
console.log('=== Ejercicio 20 ===');

const mailValidation = (mail = undefined) => {
  let cadena = mail

  if ( mail === undefined ) return console.log('No has ingresado nada')
  if ( typeof mail !== 'string' ) return console.log('No ingresaste un texto')

  let expReg2 = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
  let wordVal = expReg2.test(cadena);
  console.log(wordVal);
  
  (wordVal) 
  ? console.log('Si es un correo electrónico')
  : console.log('NO es un correo electrónico')
  
}
mailValidation();
mailValidation(5);
mailValidation('testtest.com');
mailValidation('test@test.com');


/* 21) Programa una función que dado un array numérico devuelve 
otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */
console.clear();
console.log('=== Ejercicio 21 ===');

const powArray = (nums = undefined) => {
  let numsArr = nums;
  // console.log(numsArr);

  if (nums === undefined) console.warn('No has ingresado nada');
  if (!Array.isArray(numsArr)) console.warn('No ingresaste un array');  
  if (typeof numsArr.el !== 'number') console.warn('No es un array de numeros');
  
  numsArr.forEach(function (el, index) {
    //console.log(`Elemento ${el} está en la posición ${index}`);
    let newPowArray = (Math.pow(el, 2));
    console.log(newPowArray);
})
}

//powArray('Hola');
powArray(['e', 'w', 'f']);
powArray([1, 4, 5]);


/* Solución profe */
const devolverCuadrados = (arr = undefined) => {
   if (arr === undefined) return console.warn('No has ingresado nada');
   if (!(arr instanceof Array)) return console.warn('El valor ingresado no es un array');
   if (arr.length === 0) return console.warn('El arreglo está vacío');

   for (let num of arr){
     if (typeof num !== 'number') return console.warn(`El valor ${num} No es un numero`);
   }

   const newArr = arr.map(el => el * el);

   return console.log(`Arreglo original ${arr}, \nArreglo al cuadrado: ${newArr}`);
}
 
devolverCuadrados([1,4,8]);
/* 22) Programa una función que dado un array devuelva el número mas alto 
y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */
console.log('=== Ejercicio 22 ===');

const highLow = (arrayNums) =>{

  let numsHL = arrayNums;
  if (arrayNums === undefined) console.warn('No has ingresado nada');
  if (!Array.isArray(numsHL)) console.warn('No ingresaste un array');  
  if (typeof numsHL.i !== 'number') console.warn('No es un array de numeros');

  let max = Math.max(...numsHL);
  let min = Math.min(...numsHL);

  console.log(`umero mayor es: ${max}, numero menor: ${min}`)
  let highLow = [max, min];
  console.log(highLow);
  
}

// highLow('Hola');
// highLow(['e', 'w', 'f']);
highLow([123,34535,77]);


/* 23) Programa una función que dado un array de números devuelva un 
objeto con 2 arreglos en el primero almacena los números pares y en 
el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], 
impares: [1,3,5,7,9]}. */
console.log('=== Ejercicio 23 ===');

const pairOdd = (allNums = undefined) =>{

  let array = allNums,
   pares = [],
   impares = [];

   for(let i = 0; i < array.length; i++){
     if(i % 2 === 0){
        impares.push(array[i]);
    } else {
      pares.push(array[i]);
    }
   }

console.log(pares);
console.log(impares);

const numsObject = {
  pares,
  impares,
}

console.log(numsObject)
}

pairOdd([1,2,3,4,5,6,7,8,9,10]);


/* Solución profe */

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined) return console.warn('No has ingresado nada');
   if (!(arr instanceof Array)) return console.warn('El valor ingresado no es un array');
   if (arr.length === 0) return console.warn('El arreglo está vacío');

   for (let num of arr){
     if (typeof num !== 'number') return console.warn(`El valor ${num} No es un numero`);
   }

  return console.log({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1)
  })
}

separarParesImpares([1,2,3,4,5,6,7,8,9,10]);


/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */
console.clear()
console.log('=== Ejercicio 24 ===');

const inverse = (arr = undefined) =>{

  let numsArray = arr;
  const minMax = numsArray.sort(function(a, b){return a - b});
  console.log(minMax)
  
  let numsObject = {
    minMax: numsArray.sort(function(a, b){return a - b}),
    maxMin: numsArray.sort(function(a, b){return a - b}).reverse()
  }

  return console.log(numsObject)
}
inverse([7,5,7,8,6])

/* Solucion Profe */
const ordenarArreglo = (arr = undefined) => {
  return console.log({
    arr, // Objeto literal
    asc: arr.map(el => el).sort(),
    // del arreglo arr, uso el .map para crear uno nuevo. (el => el) por cada elemento devuelve uno para el nuevo array
    desc: arr.map(el => el).sort().reverse(),
  });
}

ordenarArreglo([7,5,7,8,6])

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */
console.log('=== Ejercicio 25 ===');

const repeatNums = (arr = undefined) => {

  if (arr === undefined) return console.warn('No has ingresado nada');
   if (!(arr instanceof Array)) return console.warn('El valor ingresado no es un array');
   if (arr.length === 0) return console.warn('El arreglo está vacío');
  if  (arr.length === 1) return console.warn('El arreglo debe tener almenos 2 elementos');

let numsArr = arr;
let noRepeat = [ ...new Set(numsArr) ]

console.log(noRepeat);

let uniqs = numsArr.filter(function(item, index, self) {
  return self.indexOf(item) === index;
  // Esto crea un nuevo array y compara los valores del array original contra los del nuevo 
})
console.log(uniqs);
}

repeatNums(["x", 10, "x", 2, "10", 10, true, true]);
/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */
console.log('=== Ejercicio 26 ===');

const arrAverage = (arr = undefined) => {

  if (arr === undefined) return console.warn('No has ingresado nada');
   if (!(arr instanceof Array)) return console.warn('El valor ingresado no es un array');
   if (arr.length === 0) return console.warn('El arreglo está vacío');

   for (let num of arr){
     if (typeof num !== 'number') return console.warn(`El valor ${num} No es un numero`);
   }

  const numsArr = arr;
  let sum = 0;

  numsArr.forEach (function(el){
    sum += el; // sum = sum + el;
  });
  console.log(sum);

  let prom = sum / numsArr.length
  console.log(prom)
}

arrAverage([9,8,7,6,5,4,3,2,1,0]);


/* Solución profe */

const promedio = (arr = unefined) => {

  if (arr === undefined) return console.warn('No has ingresado nada');
   if (!(arr instanceof Array)) return console.warn('El valor ingresado no es un array');
   if (arr.length === 0) return console.warn('El arreglo está vacío');

   for (let num of arr){
     if (typeof num !== 'number') return console.warn(`El valor ${num} No es un numero`);
   }

   return console.log(
     arr.reduce((total, num, index, arr) => {
      total += num;

      if (index === arr.length-1){
        return `El promedio de ${arr.join(' + ')} es ${total / arr.length}`;
      } else{
       return total;
     }
    })
   )
}

promedio([9,8,7,6,5,4,3,2,1,0]);

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB,
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary,
Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV,
Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

console.clear()
console.log('=== Ejercicio 27 Big boss ===');

//Model
class movieModel {
  constructor(id, titulo, director, anio, pais, genero, calificacion){
    this.id = id, 
    this.titulo = titulo,
    this.director = director,
    this.anio = anio,
    this.pais = pais,
    this.genero = genero,
    this.calificacion = calificacion
  }

  presentar () {
    console.log(`Soy una peli de ${this.genero}`)
  }
}


//Herencia de la clase model
/* class Movie extends movieModel{
  constructor(id, titulo, director, anio, pais, genero, calificacion){
    super(id, titulo, director, anio, pais, genero, calificacion);
  }

  static queEres(){ //El static hace que no tenga que instanciar la clase
            console.log('Soy una peli');
        }
}

const instanciando = () => {

  let generes = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV',
'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];

  const back = new movieModel('tt0088763', 'Back to the future', 'Robert Zemeckis', 1985, ['USA'], generes[21], 8.5);
  const tron = new Movie('tt1104001', 'TRON: Legacy', 'Joseph Kosinski', 2010, ['USA'], generes[21], 6.8);

  if (tron.values < 7) return console.log('NO tiene todos las propiedades')  
  //if (!(tron.genero instanceof Array)) return console.warn('El genero ingresado no es un array');

  
  let expReg2 = /[0-9]/i;
  let wordVal = expReg2.test(tron.anio);
  console.log(wordVal);
  
  if(wordVal) {
    console.log('Si es un numero de 4 digitos')
  } else {
    console.log('No tiene 4 digitos')
  }



//Movie.queEres()
console.log(back);
console.log(tron);
back.presentar()
}

instanciando(); */





/* 
class AnimalModel { // Las clases no reciben parámetros
        // Atributos
        constructor(nombre, genero){ // los parametros los reciben en el constructor
            this.nombre = nombre;
            this.genero = genero;
        }
    //Los métodos los escribo como objetos literales
        sonar (){
            console.log('hago ruidos porq estoy vivo');
        }
        saludar (){
            console.log(`Me llamo ${this.nombre}`)
        }
}

// Esto es una herencia de animalModel

class Dog extends AnimalModel{ //Con extends, Perro hereda las características de AnimalMolde
        constructor(nombre, genero, tamanio){ 
            super(nombre, genero); // con el metodo "super" se manda llamar al constructor de la clase padre
            this.tamanio = tamanio;
            this.raza = null;
        }
        // Sobreescribiendo los metodos
        sonar(){
            console.log('Soy un perro y ladro');
        }
        ladrar2(){
            console.log('Guauu guauu guauu');
        }

        static queEres(){ //El static hace que no tenga que instanciar la clase
            console.log('Los perros son los mejores animales y mascotas del mundo');
        }

        // Los setters y getters permiten establecer y obtener 
        // el valor de atributos de una clase
        get getRaza(){ // El prefijo set dice que es un metodo obtenedor
            return this.raza;
        }
        
        set setRaza(raza){ // set modifica la propiedad
            this.raza = raza;
        }
        
    }

    Dog.queEres();
    


     const pepito = new Dog('Pepito', 'macho', 'grande', 'canchoso');
     const kitty = new AnimalModel('Kitty', 'Hembra');


    console.log(pepito);
    console.log(kitty);
    kitty.saludar();
    kitty.sonar();  */

    class Pelicula {
      constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id; 
        this.director = director;
        this.titulo = titulo;
        this.pais = pais;
        this.estreno = estreno;
        this.calificacion = calificacion;
        this.generos = generos;

        //Debo invocar en el constructor, los métodos creados más abajo
        this.validarIMDB(id); // Llamo el metodo
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
      }

      //Creo un atributo estatico que me permita llamar los generos
      static get listaGeneros(){
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV',
'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
      }

      // Luego un metodo estatico que los imprima en consola
      static generosAceptados(){
        console.log(`Los metodos aceptados son ${Pelicula.listaGeneros.join(', ')}`);
      }

      // == Métodos genéricos ==
      // Todo lo hago dentro de la clase POO 🤯
      // Primero 
      // 👇 fucnión para validar que cadenas: reciben 2 parametros, la propiedad a evaluar (id, título o director)
      // y el valor a evaluar (9, 50, 100)
      validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" NO es una cadena de texto`)

        return true; // Si lo de arriba no ocurre devolvemos un true
      }
      // Esto lo puedo reutilizar con los valores tipo string

      // Segundo 
      // 👇 método para validar cantidad de caracteres 
      validarLongitudCadena(propiedad, valor, longitud){ // Propiedad: titulo / valor: Peli / longitud: 100
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede los caracteres permitidos: ${longitud}`);

        return true
      }

      // Tercero
      //Metodo para validar numeros
      validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" Está vacío`)
        if(typeof valor !== 'number') return console.error(`${propiedad} "${valor}" no es un numero`);

        return true
      }

      // Cuarto
      // Validar arreglos
      validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} ${valor} está vacío`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} ${valor} NO es un arreglo`);
        // 👆 lo niego, osea si valor no es instancia de un array
        for(let cadena of valor){
          if(typeof cadena !== 'string') return console.error(`${cadena} no es un string`);
        }

        return true
      }

      // == Métodos especificos ==
      // 👇 Método para validar id
      validarIMDB(id){
        if(this.validarCadena('IMDB id', id)){ // aprovecho el metodo validarCadena
          if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) // Si esta prueba sale negativa, entonces... 👇
          return console.error(`IMDB id ${id} No es valido, debe tener 2 letras seguidas de 7 numeros`);
        }
      }
      
      validarTitulo(titulo){ // 👇 para que no se vaya vacío y sea cadena de texto
        if(this.validarCadena('Titulo', titulo)) // aprovecho el metodo validarCadena, si da true... 👇
          this.validarLongitudCadena('Titulo', titulo, 100);
      }
      
      validarDirector(director){ // 👇 para que no se vaya vacío y sea cadena de texto
        if(this.validarCadena('Director', director)) // aprovecho el metodo validarCadena, si da true... 👇
          this.validarLongitudCadena('Director', director, 50);
      }

      validarEstreno(estreno){
        if(this.validarNumero('Año de estreno', estreno)){ // aprovecho el metodo validarCadena
          if(!(/^([0-9]){4}$/.test(estreno))) // Si esta prueba sale negativa, entonces... 👇
          return console.error(`Año de ${estreno} No es valido, debe se un numero de 4 digitos`);
        }
      }

      validarPais(pais){ //Solo recibe el país
        this.validarArreglo('País', pais); // Solo ejecuta el metodo validar arreglo
      } // Esto valida a true, si cumple las validaciones no hay nada en consola
      
      validarGeneros(generos){ 
        if (this.validarArreglo('Generos', generos)){ //Si le validación de arreglo se cumple...
          for (let genero of generos){ // Con este for of recorro los arreglos que ingresa el usuario (generos)
            console.log(generos) // generos, es el valor que ingresa el usuario
            if(!Pelicula.listaGeneros.includes(genero)){ // El metodo includes valida si generos son los mismos de listaGeneros
              // Lo llamo de la clase Pelicula ya q es un metodo estatico
              // Si no lo incluye entonces...
              console.error(`Genero(s) incorrectos "${generos.join(', ')}"`);
              Pelicula.generosAceptados(); // Llamo el metodo estático que imprime generos aceptados
            }
          }
        }
      } 

      validarCalificacion(calificacion){
        if(this.validarNumero('Calificacion', calificacion)){ // aprovecho el metodo validarCadena
         return (calificacion < 0 || calificacion > 10) // Si el numero no está entre 0 y 10
         ? console.error(`La calificación debe estar entre 0 y 10`)
         : this.calificacion = calificacion.toFixed(1); // Si sí, calificación es igual a calificación.toFixed()
         // Fixed, me permite decir a cuantos decimales corto un numero (1 despues de la coma)
        }
      }
      // Método que imprime ficha tecnica
      fichaTecnica(){
        console.info(`Ficha técnica; \n
        Título: "${this.título}"\n
        director: "${this.director}"\n
        Año de estreno: "${this.estreno}"\n
        País: "${this.pais.join(' - ')}"\n
        Generos: "${this.generos.join(', ')}"\n
        Calificación: "${this.calificacion}"\n
        IMDB id: "${this.id}"`);
      }
    }

    // Pelicula.generosAceptados();

     /* const peli = new Pelicula({
       id: 'tt1234567',
       titulo: 'La gran peli',
       director: 'Jhon Doe',
       estreno: 2020,
       pais: ['USA', 'Japón'],
       generos: ['Comedy', 'Sport'],
       calificacion: 9.555,
     });

     // Ejecutando metodo de ficha técnica
      peli.fichaTecnica(); */

      const misPelis = [
        {
          id: 'tt1104001',
       titulo: 'Tron Legacy',
       director: 'Joseph Kosinski',
       estreno: 2010,
       pais: ['USA'],
       generos: ['Sci-Fi'],
       calificacion: 6.8,
        },
        {
          id: 'tt0099088',
       titulo: 'Back to the future',
       director: 'Robert Zemeckis',
       estreno: 1985,
       pais: ['USA'],
       generos: ['Sci-Fi'],
       calificacion: 7.4,
        },
        {
          id: 'tt0468569',
       titulo: 'The Dark Knight',
       director: 'Christopher Nolan',
       estreno: 2008,
       pais: ['USA'],
       generos: ['Action'],
       calificacion: 9.0,
        },
      ];

      misPelis.forEach(el => new Pelicula(el).fichaTecnica());
      // Este forEach recorre el array de objetos, por cada objeto genera una nueva instancia
      // De la clase Pelicula, quien recibe los valores es el elemento (el)