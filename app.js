/*En esta línea de código se está declarando la función const que es functions y después del signo igual
 con require se están importando datos desde otro módulo, entre paréntesis se indica el id del módulo.*/
const functions = require('./functions.js') 

//En esta línea de código se está solicitando que muestre en la terminal el listado de funciones que se van a ejecutar.
console.log(functions); 

/*Se esta solicitando que se imprima en la consola la palabra "Ejercicio", además se esta pidiendo que se 
pase a la siguiente línea y además se agregue una nueva linea, para que haya una separación entre la palabra
ejercicio y los resultados de las funciones*/
process.stdout.write("Ejercicio\n\n"); 

/*En estas líneas de código se está solicitando que se muestre el resultado en la terminal de cada una de
 las funciones matemáticas de acuerdo con los argumentos dados, en la primera línea se requiere el 
 resultado de la suma entre 5 y 3, en la segunda línea se requiere el resultado de la resta entre 2 y 8, en 
 la tercera línea se requiere le resultado de la multiplicación de 2 y 8 y en la última línea se requiere el 
 resultado de la división entre 2 y 0.9.*/
console.log(functions.add(5,3));
console.log(functions.substract(2,8));
console.log(functions.multiply(2,8));
console.log(functions.divide(2,0.9));