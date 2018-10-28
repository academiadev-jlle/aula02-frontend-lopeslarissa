/*
Escreva uma função que receba valores numéricos inteiros e retorne o menor valor.

Exemplos de retorno esperado:
minor(0, 2, 4, -1, 5, 10, 50); // -1
minor(4, 5, 1, 3); // 1
*/

function returns_lower_value(...numbers) {
    return numbers.reduce((previousValue, currentValue) => {
        if (previousValue > currentValue )
            previousValue = currentValue;
        return previousValue;
    });
}

console.log(returns_lower_value(0, 2, 4, -1, 5, 10, 50));
console.log(returns_lower_value(4, 5, 1, 3));