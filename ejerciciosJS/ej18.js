let num = Number(prompt('Dame un numero y te dire si es multiple de 3 o de 8'));

if (num %3 === 0) {
    console.log(`El numero ${num} es multiple de 3.`);
} else if (num %8 === 0) {
    console.log(`El numero ${num} es multiple de 8.`);
} else {
    console.log(`El numero ${num} no es multiple de 3 ni de 8.`);
}