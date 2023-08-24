/**
 * Problema: Factorial de un número
Escribe una función en JavaScript que calcule el factorial de un número dado. 
El factorial de un número n es el producto de todos los enteros positivos desde 1 hasta n. 
 * 
 */


function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);

}

//Example use:
const result = factorial(5);
console.log('El factorial de 5 es: ' + result);

//output: El factorial de 5 es: 120

/**
 
Explicación:

Definimos una función llamada factorial que toma un parámetro, numero.
Utilizamos una declaración if para manejar los casos base del factorial: si numero es igual a 0 o 1, el factorial es 1.
En el caso general, multiplicamos numero por el resultado de la llamada recursiva a factorial(numero - 1), 
lo que nos permite calcular el factorial de forma recursiva.

**/