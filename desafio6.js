let item = '';
let tipo = '';
let remover = '';
let lista = "sim";
let legumes = [];
let frutas = [];
let graos = [];
let laticinios = [];
let bebidas = [];
let limpeza = [];
let doces = [];



while(lista != "não"){
    if(legumes.length === 0 && frutas.length === 0 && graos.length === 0 && laticinios.length === 0 && bebidas === 0 & limpeza.length === 0 && doces.length === 0){
        lista = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        lista = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
    while (lista != "sim" && lista != "não" && lista != "remover") {  
        alert(`Operação não reconhecida!`);
            lista = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
        }
        
        if (lista === "não"){  
        break;
        }
        
        if (lista === "sim") {
            item = prompt("Qual comida você deseja inserir?")
            tipo = prompt("Qual a categoria desta comida ? legumes - frutas - grãos - laticínios - bebidas - limpeza - doces")
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
                    laticinios.push(item);
                    alert(`${item} foi adicionado a sua lista de Laticínios`);
                } else if (tipo === "bebidas") {
                    bebidas.push(item);
                    alert(`${item} foi adicionado a sua lista de Bebidas`);
                } else if (tipo === "limpeza") {
                    limpeza.push(item);
                    alert(`${item} foi adicionado a sua lista de Limpeza`);
                } else if (tipo === "doces") {
                    doces.push(item);
                    alert(`${item} foi adicionado a sua lista de Doces`);
                }else {
                    alert("Insira uma categoria válida")
            }
        } else if (lista === "remover") {
        if (legumes.length === 0 && frutas.length === 0 && graos.length === 0 && laticinios.length === 0 && bebidas === 0 & limpeza.length === 0 && doces.length === 0) {
            alert("Lista vazia!");
        } else {
            remover = prompt (`Lista de compras:\n Legumes: ${legumes};\n Frutas: ${frutas};\n Grãos: ${graos};\n Laticíneos: ${laticinios};\n Bebidas: ${bebidas};\n Limpeza: ${limpeza};\n Doces: ${doces}. Qual produto deseja remover ?`)
            if ( legumes.indexOf(remover) != -1){
                legumes.splice(legumes.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if ( frutas.indexOf(remover) != -1){
            frutas.splice(frutas.indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`)
            } else if ( graos.indexOf(remover) != -1){
            graos.splice(graos.indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`)
            } else if ( laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if ( bebidas.indexOf(remover) != -1){
                bebidas.splice(bebidas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if ( limpeza.indexOf(remover) != -1){
                limpeza.splice(limpeza.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if ( doces.indexOf(remover) != -1){
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert("O seu produto não foi localizado na lista!")
            }
        }
    }
    

    
   // lista = prompt("Deseja adicionar mais alguma comida? ou digite 'remover' para retirar da lista")
}

alert("Sua Lista foi finalizada!");

console.log(`Lista de compras:\n Legumes: ${legumes};\n Frutas: ${frutas};\n Grãos: ${graos};\n Laticíneos: ${laticinios};\n Bebidas: ${bebidas};\n Limpeza: ${limpeza};\n Doces: ${doces}.`);