// Se esta declarando la función Math que es constante y es un objeto.
const Math = {}; 

/*se está declarando la función add y se está diciendo que se ejecutara entre dos parámetros a y b.
En la siguiente línea se está solicitando que muestre el resultado de la suma entre a y b. Y en la última se da cierre.*/
function add(a,b) { 
    return a + b;
}

/*se está declarando la función substract y se declara que se realizara entre dos parámetros que son a y b.
En la siguiente línea se está pidiendo que muestre el resultado de la operación restar entre los parámetros 
a y b. En la última se da cierre.*/
function substract(a,b) { 
    return a - b;
}

/* se declara la función multiply y se estará realizando con los parámetros a y b. En la tercera línea se está 
solicitando que muestre el resultado de la multiplicación entre a y b. En la última se da cierre. */
function multiply(a,b) { 
    return a * b;
}

/*se declara la función divide que se estará realizando entre los parámetros a y b. En la siguiente línea 
se esta declarando una condición en la que se está especificando que si tanto a como b son iguales a 0
se mostrara un mensaje que indique que hay un error ya que no es posible dividir entre cero. En la siguiente
línea se está indicando que si b es igual a cero también se generara un mensaje de error, en la siguiente
linea se pide que al no cumplirse ninguna de las dos condiciones anteriores se podrá ejecutar la operación 
de manera normal, es decir la división entre los dos parámetros a y b. En la última se da cierre al código.*/
function divide(a,b) {
    if (b == 0 && a == 0) {
        return "Error: no se puede dividir entre cero"
    } else if (b == 0) {
        return "Error: no se puede dividir entre cero" 
    }
        return a / b;
    }

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

/* Se esta especificando que el objeto Math se va a exportar*/ 
module.exports = Math