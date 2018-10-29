/* Escreva uma função que possa ser utilizada para fazer a comparação de dois objetos pelos valores de suas propriedades

Exemplo de retorno esperado:
let obj1 = { ‘nome’: ‘Pedro’ };
let obj2 = { ‘nome’: ‘Pedro’ };
console.log(obj1 === obj2); // false!
console.log(deepEqual(obj1, obj2)); // true!

Considere que o seu objeto pode ter outros objetos como propriedade :) */

function compareObjects(object1, object2) {
    for (const key in object1) {
        if (object1[key] !== object2[key]) return false;
    }
    return true;
}

let person = {'name': 'Iago', "last_name":"Marinheiro"};
let person2 = {"last_name":"Marinheiro", 'name': 'Iago'};

console.log(compareObjects(person, person2));