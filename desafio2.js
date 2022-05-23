function mostraMensagem (texto) {
    alert(texto);
}

const nome = prompt("Olá, qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem você está estudando?");

mostraMensagem(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

newFunction();

function newFunction() {
    const resposta = prompt(`Você gosta de estudar ${linguagem} ? responda 1 para SIM e 2 para NÃO`);

    if (resposta == 1) {
        mostraMensagem("Muito bom, continue estudando e você terá muito sucesso!");
    } else {
        mostraMensagem("Aaah que pena... Já tentou experimentar outras linguagens ?");
    }
}






