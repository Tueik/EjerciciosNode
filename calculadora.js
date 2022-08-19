//Programa para emular calculadora

const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}

// Necesito crear una constante de tipo objeto, donde voy a almacenar las variables que quiero testear
// 1. Almacenar funciones en una constante del tipo objetivo
const operaciones = {
    sumar,
    restar,
    multiplicar,
    dividir,
}


//Debemos exportar todo el objeto 
//2. Exportar funciones
module.exports = operaciones;
