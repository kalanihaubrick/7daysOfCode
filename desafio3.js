let carreira = prompt("quer seguir para área de Front-End ou seguir para a área de Back-End");
let linguagem = '';

if (carreira == 'Back-End') {
   linguagem = prompt ('Você quer aprender aprender C# ou aprender Java?');
} else if (carreira == 'Front-End') {
    linguagem = prompt ('Você quer aprender React ou aprender Vue?')
} else {
    alert('Você não escolheu uma opção válida');

}

let escolha = prompt ("Digite 1 se você quer seguir se especializando na área escolhida ou 2 se quer seguir se desenvolvendo para se tornar Fullstack?");

if (escolha === '2') {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`)
    } else if (escolha === '1') {
        alert(`Continue se especializando em ${linguagem} para dominar a área de ${carreira}!`);
    } else {
        alert('Você não escolheu uma opção válida');
    
    }

let aprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");

while (aprender === 'ok') {
    let novaLinguagem = prompt("Qual ?")
    alert(`${novaLinguagem} é realmente uma tecnologia muito legal!`)
    aprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}




