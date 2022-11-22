let suma = 0;
let n = Number(prompt("Dame un numero hasta el cual quieres ir sumando"));

for (let i = 0; i < n; i++) {
    suma = suma + i;
}

console.log(`El resultado final de la suma es: ${suma}`);
