console.log("Aula 03 JavaScript");

// Operadores artimeticos
let x = 10;
let y =5;

let soma = x + y; 
let subtracao = x- y;
let multiplicacao = x * y; 
let divisao = x / y;
let resto = x % y;

// Operadores de  atribuiçao
let a = 10;
a + 5;

// Operadores de Comparação
let = time = "Flamengo";
let maiorTime = time == "Flamengo";
console.log(maiorTime);

// Estruturas Condicionais
const idade =18;

if (idade >=18) {
    console.log("Você é maior de idade");
    } else {
    console.log("Voce é menor de idade");
}

// Estrutura de repetição

// Exercicio 1
function VerificarIdade() {
    const idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
        resultado.style.color = "green";
        console.log("Você é maior de idade");
    } else {
        resultado.textContent = "Você é menor de idade.";
        resultado.style.color = "red";
        console.log("Você é menor de idade");
        
    }
}


// Exercicio 2
function VerificarNumero() {
    const numero = document.getElementById("numeros").value;

    if (numero%2==0) {
        console.log("Par");
       
    } else {
        console.log("Impar");
       
    }
}

// Exercicio 3
function VerificarPositivoNegativo() {
    const Numero = document.getElementById("Numero").value;
    const Verificação = document.getElementById("Verificação");

    if (Numero==0) {
        Verificação.textContent = "Seu Numero é Zero";
        Verificação.style.color = "black";
        console.log("Zero");
    } else if (Numero >=1) {
        Verificação.textContent = "Seu Numero é Positivo";
        Verificação.style.color = "darkblue";
        console.log("Positivo");
}
    else {
        Verificação.textContent = "Seu Numero é Negativo";
        Verificação.style.color = "red";
        console.log("Negativo");
        
    }
}

// Exercicio 4
function Tabuada(x) {
    
    for (let i = 1; i <11; i++) {
        let total = x*i;
        console.log(x + " x " + i + " = " + total);
}
}
Tabuada(7)