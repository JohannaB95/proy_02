// Se esta declarando la función Math que es constante y es un objeto.
const Math = {}; 

//Se declara la función add y que tiene dos parámetros a y b.
function add(a,b) { 
    //Se retorna el resultado de la suma entre a y b.
    return a + b;
}

//Se declara la función substract y que tiene dos parámetros a y b.
function substract(a,b) { 
    //Se retorna el resultado de la resta entre a y b.
    return a - b;
}

//Se declara la función multiply y que tiene dos parámetros a y b.
function multiply(a,b) { 
    //Se retorna el resultado de la multiplicación entre a y b.
    return a * b;
}

//Se declara la función divide y que tiene dos parámetros a y b.
function divide(a,b) {
    //Se utiliza el condicional if para verificar el valor de a y b, si a y b son iguales a 0
    if (b == 0 && a == 0) {
        //Se retorna un mensaje indicando que no se puede dividir entre 0
        return "Error: no se puede dividir entre cero"
    //Y si b es igual a 0
    } else if (b == 0) {
        //Se retorna un mensaje indicando que no se puede dividir entre 0
        return "Error: no se puede dividir entre cero" 
    }
        /*Si no se cumple ninguna de las dos condiciones anteriores, se retorna el resultado de la división entre
        a y b.*/
        return a / b;
    }

//Se agregan las funciones al objeto math
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

/* Se esta especificando que el objeto Math se va a exportar*/ 
module.exports = Math