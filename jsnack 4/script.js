console.log("test")
// Jsnack 4
// Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
// Stampa a schermo la bici con peso minore utilizzando destructuring e template literal


const biciclette = [
    {
        nome: "Ghost",
        peso: "9"
    },
    {
        nome: "Lamborghini",
        peso: "5"
    },
    {
        nome: "Porsche",
        peso: "4"
    },
    {
        nome: "KTM",
        peso: "4.6"
    }
]

console.log(biciclette)


let laPiuLeggera = 100;
let outputBici ;

for(let bici of biciclette){
    if(bici.peso < laPiuLeggera){
        laPiuLeggera = bici.peso;
        outputBici = bici;
    }
}

console.log(laPiuLeggera)
console.log(outputBici)

document.querySelector('body').innerHTML = ` <h1 style = "text-align: center"> La bici più leggera è ${outputBici.nome} con un peso di ${outputBici.peso}Kg`