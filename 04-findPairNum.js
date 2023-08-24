/*
Problema : Encontrar los pares de números que suman un valor dado

Escribe una función que tome un array de números y un valor objetivo y 
encuentre todos los pares de números en el array que sumen exactamente el valor objetivo. 
La función debe devolver un array de arrays, donde cada subarray contiene un par de números que suman el valor objetivo.

*/

function findPairNum(array, objetive) {
    const pair = [];
    const numSet = new Set(array);

    for (let num of array) {
        const complement = objetive - num;

        if (numSet.has(complement)) {
            pair.push([num, complement]);
        }
        numSet.add(num);
    }
    return pair;
}

// example use:
const array = [1, 2, 3, 4, 5];
const objetive = 6;
const result = findPairNum(array, objetive);
console.log('Los pares encontrados son...', result);

/*  
output:
'Los pares encontrados son...' [
  [ 1, 5 ],
  [ 2, 4 ],
  [ 3, 3 ],
  [ 4, 2 ],
  [ 5, 1 ]
]

Explicación:

* Utilizamos un conjunto (Set) llamado numSet para mantener un registro de los números que hemos visto hasta ahora en el array arr.
* Recorremos el array arr y para cada número, calculamos su complemento (la diferencia entre el objetivo y el número actual).
* Verificamos si el complemento ya existe en numSet. Si es así, significa que hemos encontrado un par de números que suman el objetivo, 
por lo que los agregamos al array de pares.
* Finalmente, agregamos el número actual al conjunto numSet para que podamos usarlo para futuras comparaciones.

*/