/**
 * 
 * Problema: Encontrar el número mayor en una matriz

Escribe una función en JavaScript que encuentre el número mayor en una matriz de números.
 
 */

// opcion con For
function findMaxNumber(matriz) {
    let max = matriz[0][0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > max) {
                max = matriz[i][j];
            }
        }
    }

    return max;
}

//opcion con reduce
function findMaxNumber(matriz) {
    return matriz.reduce((max, fila) => {
        return Math.max(max, Math.max(...fila));
    }, Number.NEGATIVE_INFINITY);
}


//example use:
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const result = findMaxNumber(matriz);
console.log('El número mayor de la matriz es: ' + result);

/**

Explicación:

* La función encontrarNumeroMayor toma una matriz como entrada.
* Inicializamos una variable mayor con el primer elemento de la matriz.
* Luego, recorremos todos los elementos de la matriz usando bucles for anidados.
* Comparamos cada elemento con el valor actual de mayor. Si encontramos un número mayor, actualizamos mayor con ese valor.
* Al final, devolvemos mayor, que será el número mayor en la matriz.


 */