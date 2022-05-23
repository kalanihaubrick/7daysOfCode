let numero = Math.round(Math.random()*10);
let chute = '';
let tentativas = 2;
console.log(numero);
for (let i = 0; i < 3; i++) {
    chute = prompt("Tente adivinhar o numero de 1 à 10");
    if (chute == numero) {
        alert(`Parabéns você acertou, o numero é ${numero}`)
        break;
    } else {
        alert(`Tente denovo! Você tem mais ${tentativas} chances.`);
        tentativas--
    }
}