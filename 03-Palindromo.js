/**
 Problema 4: Comprobar si una palabra es un palíndromo

Escribe una función en JavaScript que determine si una palabra es un palíndromo. 
Un palíndromo es una palabra que se lee igual de izquierda a derecha que de derecha a izquierda.

*/

function palindrome(word) {
    word = word.toLowerCase();
    const long = word.length;

    for (let i = 0; i < long / 2; i++) {
        if (word[i] !== word[long - 1 - i]) {
            return false;
        }

    }
    return true;
}

//Example use:
const word = 'Anita lava la tina';
const result = palindrome(word);
console.log(result);

