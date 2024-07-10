let numeros = [10, 40, 50, 30];

let dobroDobrado = numeros.map(function(numero) {
    return numero * 2;  // Corrigido para multiplicar o número atual por 2
});

console.log(dobroDobrado);  // Saída: [20, 80, 100, 60]
console.log(numeros) //Original