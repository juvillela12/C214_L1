const Calculadora = require('./src/calculadora');

let soma_resto = Calculadora.soma(2, 2);
let subtracao_resto = Calculadora.subtracao(10, 5);
let multiplicacao_resto = Calculadora.multiplicacao(2, 3);
let divisao_resto = Calculadora.divisao(10, 2);
let exponenciacao_resto = Calculadora.exponenciacao(2, 3);

console.log(soma_resto);
console.log(subtracao_resto);
console.log(multiplicacao_resto);
console.log(divisao_resto);
console.log(exponenciacao_resto);
