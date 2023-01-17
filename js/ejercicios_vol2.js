const charCounter = (word) =>{
    let str = word;

    if (typeof str === 'string' && str.length <= 0 ){
        console.log('Debes ingresar una frase')
    } else {
        console.log(`La cadena tiene ${word.length} caracteres`);
    }
}

charCounter('3');