let num1 = Number(prompt('Dame un numero'))
let num2 = Number(prompt('Dame otro numero'))

let suma = num1 + num2;
console.log(suma);
if (suma > 50) {
    suma == suma *2;
    console.log(`La suma final es: ${suma}`);
} else {
    suma = suma*3;
    console.log(`La suma final es: ${suma}`);
}