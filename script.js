function calculadora(a, b, operacao) {
    if (operacao == 'soma') {
        return a + b;
    } else if (operacao == 'subtracao') {
        return a - b;
    } else if (operacao == 'multiplicacao') {
        return a * b;
    } else if (operacao == 'divisao') {
        return a / b;
    } else {
        return 'Operação inválida';
    }
}
console.log(calculadora(5, 3, 'soma'))
console.log(calculadora(63, 34, 'subtracao'))
console.log(calculadora(23, 7, 'multiplicacao'))
console.log(calculadora(81, 9, 'divisao'))