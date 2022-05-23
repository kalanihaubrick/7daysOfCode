let numero1;
let numero2; 
let operacao;

//------------------funções --------------------------
function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero += segundoNumero;
}

function subtrai(primeiroNumero, segundoNumero) {
    return primeiroNumero - segundoNumero;
}

function divide (primeiroNumero,segundoNumero) {
    return primeiroNumero / segundoNumero;
}

function multiplica (primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
}


//-------------------- repetição -----------------------------
while (operacao != "0") {
    operacao = prompt("Qual operação deseja fazer? Digite: 'soma' , 'subtração' , 'divisão' , 'multiplicação' ou 'sair'.")

    if (operacao ==="soma") {
        numero1 = parseFloat(prompt("Digite o primeiro numero"));
        numero2 = parseFloat(prompt("Digite o segundo numero"));

        alert(`O resultado da soma é ${soma(numero1,numero2)}`);
        
    } else if (operacao === "subtração") {
        numero1 = parseFloat(prompt("Digite o primeiro numero"));
        numero2 = parseFloat(prompt("Digite o segundo numero"));

        alert(`O resultado da subtração é ${subtrai(numero1,numero2)}`);
    } else if (operacao === "divisão") {
        numero1 = parseFloat(prompt("Digite o primeiro numero"));
        numero2 = parseFloat(prompt("Digite o segundo numero"));

        alert(`O resultado da divisão é ${divide(numero1,numero2)}`);
    } else if (operacao === "multiplicação") {
        numero1 = parseFloat(prompt("Digite o primeiro numero"));
        numero2 = parseFloat(prompt("Digite o segundo numero"));

        alert(`O resultado da multiplicação é ${multiplica(numero1,numero2)}`);
    } else if (operacao === "sair") {
        alert ("Até a proxima");
        break
    } else {
        alert("Digite uma opção válida");
    }
}