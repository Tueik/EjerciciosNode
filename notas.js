/*
Una prueba unitaria es una prueba automatizada que tiene como objetivo verificar la funcionalidad de una unidad de codigo. Entendemos "unidad de codigo" como la parte mas pequeña testeable de una aplicacion, pueden ser:

    - Rutinas
    - Funciones
    - Metodos
Ventaja de las pruebas unitarias

El escribir pruebas unitarias nos va a permitir asegurarnos que el código funciona segun lo esperado, además de encontrar errores de forma mucho mas facil y poder realizar modificaciones sin comprometer otros elementos del programa. Tambien nos permite garantiazar que cuando el codigo siga evolucionando o escalando y se implementen nuevas caracteristicas, las caracteristicas mas antiguas siguen funcionando como antes y no se rompan debido a los nuevos cambios.
Las pruebas unitarias de JavaScript normalmente se ejecutan en el explorador o en el front-end, y al realizarlas debemos tener en cuenta los siguientes aspectos:

    - La caracteristica que se está probando
    - El resultado final
    - El resultado esperado


*/

function promedio (calificación1, calificación2, calificación3){

    let calificacionFinal = (calificación1 + calificación2 + calificación3) / 3;
    if (calificacionFinal >=6){
        console.log("Felicidades, estás aprobado.");
    } else (console.log("Necesitas estudiar mas, no has aprobado."));

}

promedio (0, 7, 0);

    // Que sucede si no ingreso las 3 califaciones
    // Que sucede si una de esas calificaciones es un numero negativo?
    // Que sucede si una de esas calificaciones es un caracter distinto de un número

    // if caracter = ,
    //     console.log("error");

    //     if caracter = .
    //     console.log("error");

    //         if caracter = ?
    //         console.log("error");


    

    /*
 
    Test Runner (Herramientas para hacer pruebas unitarias)

    - Mocha
    - Ava
    - Jest

Jest es un marco de pruebas de JavaScript mantenido por Facebook, y esta enfocado en la simplicidad. Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular y Vue.js. su objetivo es trabajar de inmediato y sin configuracion. Estaba pensado originalmante para trabajar en el lado del cliente, pero puede ser usado en cualquier lado.


 */
