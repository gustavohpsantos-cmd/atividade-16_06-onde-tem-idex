const prompt= require ('prompt-sync') ();

let regiao =prompt("digite a região(sul,sudeste,nordeste)");
let valorCompra = Number(prompt("digite o valor da compra:"));
let frete; 

if ( regiao === "sudeste") {
    frete = (valorCompra>100) ? o:15;
}
else if ( regiao === "sul") {
    frete = (valorCompra>200) ? o:25;
}
else if ( regiao === "nordeste") {
    frete = (valorCompra>2540) ? o:35;
}
else{
     console.log("região não atendida.");
    frete=null;}

    if (frete!==null){
        let total = valorCompra+frete;
        console.log("valor da compra: R$"+ valorCompra);
        console.log("valor do frete; R$"+ frete);
        console.log ("Valor total a ser pago:R$"+total);

    }