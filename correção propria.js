let classe = prompt("Escolha sua classe: Guerreiro, Mago ou Arqueiro: ");
let forca = Number(prompt("Informe a sua força:")); 
let dano;

if (classe === "Guerreiro") {
    dano = (forca >= 80) ? 1000 : 500; // Ajustei para 80 conforme a regra original do jogo
} 
else if (classe === "Mago") {
    dano = (forca >= 90) ? 1200 : 400;
} 
else if (classe === "Arqueiro") {
    dano = (forca >= 70) ? 800 : 450;
} 
else {
    dano = "Classe desconhecida";
}

console.log("O dano foi:", dano);