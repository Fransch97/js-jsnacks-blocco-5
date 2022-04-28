console.log("test")
// Jsnack 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
const zucchine = [
    {
        varieta: "nera",
        pesoGrammi: 243,
        lunghezza: 8,
        unitaMisura: "cm"
    },
    {
        varieta: "romanesco",
        pesoGrammi: 263,
        lunghezza: 23,
        unitaMisura: "cm"
    },
    {
        varieta: "fiorentino",
        pesoGrammi: 213,
        lunghezza: 51,
        unitaMisura: "cm"
    },
    {
        varieta: "napoletana",
        pesoGrammi: 143,
        lunghezza: 11,
        unitaMisura: "cm"
    },
    {
        varieta: "tonde",
        pesoGrammi: 183,
        lunghezza: 42,
        unitaMisura: "cm"
    },
    {
        varieta: "trombetta",
        pesoGrammi: 278,
        lunghezza: 6,
        unitaMisura: "cm"
    },
    {
        varieta: "Crookneck",
        pesoGrammi: 118,
        lunghezza:  1.5,
        unitaMisura: "cm"
    },
    {
        varieta: "pâtisson",
        pesoGrammi: 207,
        lunghezza: 10,
        unitaMisura: "cm"
    },
    {
        varieta: "Trombetta d'Albenga",
        pesoGrammi: 167,
        lunghezza: 16,
        unitaMisura: "cm"
    },
    {
        varieta: "Golden",
        pesoGrammi: 167,
        lunghezza: 18,
        unitaMisura: "cm"
    }
]

function separateXWeight(zucche){
    const over15 = []
    const under15 = []
    const weightSeparetor = (x,peso) => (peso < 15) ? under15.push(x) : over15.push(x);

    for(let x of zucche){
        console.log(x.lunghezza)
        weightSeparetor(x,x.lunghezza)
        
    }
    // console.log(over15, "over")
    // console.log(under15, "under")
    // over15.sort(over15.lunghezza)
    // console.log(over15)
    for(let xx of over15){
        console.log(xx.varieta)
        writeHtml(".over",xx)
    }
    for(let xxx of under15){
        writeHtml(".under", xxx)
    }
}

function writeHtml(ul,x){
    document.querySelector(ul).innerHTML += `<li>${x.varieta.charAt(0).toUpperCase() + x.varieta.slice(1)} con ${x.lunghezza + x.unitaMisura} </li>`
}

separateXWeight(zucchine)

console.log(separateXWeight())
// console.log(under15, "under")