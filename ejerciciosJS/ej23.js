let numFactorial = Number(prompt("Dame un numero para calcular su factorial"));

if (typeof numFactorial === "number" && !isNaN(numFactorial)) {
    let factorial = 1;
    for (let i = 0; i <= numFactorial; i++) {
        factorial= factorial *i;
    }
    console.log(`El factorial es: (${factorial})`);
} else {
    console.log('Fin del programa, no ha ingresado un numero');
}