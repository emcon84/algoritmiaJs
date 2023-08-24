/**
 Problema: Encontrar la subcadena más larga sin caracteres repetidos

Escribe una función que tome una cadena de texto como entrada y encuentre la subcadena (substring) 
más larga sin caracteres repetidos. Debe devolver la longitud de la subcadena más larga

*/

function findLongestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const chartIndexMap = {};

    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (char in chartIndexMap) {
            start = Math.max(start, chartIndexMap[char] + 1);
        }
        indexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;

}

//Example use:
const str = 'abcabcbb';
const result = findLongestSubstring(str);
console.log('La longitud de la subcadena más larga sin caracteres repetidos es: ' + result);

/**
 * output: 
 * La longitud de la subcadena más larga sin caracteres repetidos es: 3
 
    Explicación:

* Utilizamos dos punteros, start y end, para marcar el inicio y el final de la subcadena actual sin caracteres repetidos.
* Usamos un objeto charIndexMap para mantener un registro de la última posición en la que se vio cada carácter.
* Recorremos la cadena de texto y, en cada paso, comprobamos si el carácter actual ya se ha visto en la subcadena actual.
* Si el carácter se ha visto y su última posición es mayor o igual a start, actualizamos start al siguiente carácter después de la última posición donde se vio ese carácter.
* Luego, actualizamos la posición del carácter en charIndexMap.
* En cada paso, calculamos la longitud de la subcadena actual y la comparamos con maxLength, 
actualizando maxLength si es necesario para mantener el registro de la subcadena más larga sin caracteres repetidos.

 */
