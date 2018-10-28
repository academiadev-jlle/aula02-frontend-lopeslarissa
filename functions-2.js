/* Escreva uma função que itere uma quantidade N de vezes (passada via parâmetro) e execute uma função passada via parâmetro.

Exemplos de retorno esperado:
repeat(5, console.log); // 1, 2, 3, 4, 5
let soma = 0;
repeat(2, (x) => soma += x);
console.log(soma); // 3
*/

function multiplies(n1, n2){
    return n1 * n2;
}

function repeat(n, function_callback) {
    for (let i = 0; i < n; i++) {
        console.log(function_callback(i, i+1));
    }
}
repeat(5, multiplies);

