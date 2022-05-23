let lista = prompt("Você deseja adicionar uma comida à sua lista de compras? responda 'sim' ou 'não'.");
let item = '';
let tipo = '';
let legumes = [];
let frutas = [];
let graos = [];
let laticineos = [];
let bebidas = [];
let limpeza = [];
let doces = [];

while (lista === "sim") {
    item = prompt("Qual comida você deseja inserir?")
    tipo = prompt("Qual a categoria desta comida ? legumes - frutas - grãos - laticíneos - bebidas - limpeza - doces")

    if (tipo === "legumes") {

        legumes.push(item);
        alert(`${item} foi adicionado a sua lista de Legumes`);
    } else if (tipo === "frutas") {
        frutas.push(item);
        alert(`${item} foi adicionado a sua lista de Frutas`);
    } else if (tipo === "grãos") {
        graos.push(item);
        alert(`${item} foi adicionado a sua lista de Grãos`);
    } else if (tipo === "laticíneos") {
        laticineos.push(item);
        alert(`${item} foi adicionado a sua lista de Laticíneos`);
    } else if (tipo === "bebidas") {
        bebidas.push(item);
        alert(`${item} foi adicionado a sua lista de Bebidas`);
    } else if (tipo === "limpeza") {
        limpeza.push(item);
        alert(`${item} foi adicionado a sua lista de Limpeza`);
    } else if (tipo === "doces") {
        doces.push(item);
        alert(`${item} foi adicionado a sua lista de Doces`);
    } else {
        alert("Insira uma categoria válida")
    }
    
    lista = prompt("Deseja adicionar mais alguma comida?")
}

alert("Sua Lista foi finalizada!");

console.log(`Lista de compras:\n Legumes:${legumes};\n Frutas: ${frutas};\n Grãos: ${graos};\n Laticíneos: ${laticineos};\n Bebidas: ${bebidas};\n Limpeza: ${limpeza};\n Doces: ${doces}.`);
