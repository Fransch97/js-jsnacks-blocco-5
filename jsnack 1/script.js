console.log("test")
// Jsnack 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varieta: "nera",
        pesoGrammi: 243,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "romanesco",
        pesoGrammi: 263,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "fiorentino",
        pesoGrammi: 213,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "napoletana",
        pesoGrammi: 143,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "tonde",
        pesoGrammi: 183,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "trombetta",
        pesoGrammi: 278,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "Crookneck",
        pesoGrammi: 118,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "pâtisson",
        pesoGrammi: 207,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "Trombetta d'Albenga",
        pesoGrammi: 167,
        lunghezza: [23, "cm"]
    },
    {
        varieta: "Golden",
        pesoGrammi: 167,
        lunghezza: [23, "cm"]
    }
]
console.log(zucchine.length)
console.log(zucchine)

let pesoTotale = 0;

for(let peso of zucchine){
    pesoTotale +=peso.pesoGrammi;
}
console.log(pesoTotale)

    
document.querySelector('body').innerHTML = 
`<h1 style="text-align: center;">IL PESO TOTALE DELLE ${zucchine.length} Zucchine è di ${pesoTotale/1000}Kg</h1>`