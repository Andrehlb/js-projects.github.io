// Utilitários para fazer requisições HTTP
const fetchData = async (url) => {
    
}



// var valorEmDolar = parseFloat(prompt("Qual o valor em dolar que você quer converter?"))

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual o valor em dolar que você quer converter?  ', (valorEmDolar) => {
    valorEmDolar = parseFloat(valorEmDolar);
    console.log(`O valor em dólar é:  ${valorEmDolar * 5.32}`);
    readline.close();
});
