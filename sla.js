let classe = "Guerreiro";
let forca = 85;
let dano;

if (classe === "Guerreiro") {
    dano = (forca >= 80) ? 1000 : 500;
} else if (classe === "Mago") {
    dano = (forca >= 90) ? 1200 : 400;
} else if (classe === "Arqueiro") {
    dano = (forca >= 70) ? 800 : 450;
} else {
    dano = "Classe desconhecida";
}

console.log(dano);