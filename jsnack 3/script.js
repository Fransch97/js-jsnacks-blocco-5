console.log("test")
// /Jsnack 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


const userStr = prompt("Scrivi quello che vuoi");

const reverses = userStr.split("").reverse().join("")
console.log(reverses)

document.querySelector('body').innerHTML = `<h1> La parola al incontrario è ${reverses}`