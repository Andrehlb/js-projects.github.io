// Utilitários para fazer requisições HTTP
const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
}

// // var valorEmDolar = parseFloat(prompt("Qual o valor em dolar que você quer converter?"))

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Qual o valor em dolar que você quer converter?  ', (valorEmDolar) => {
//     valorEmDolar = parseFloat(valorEmDolar);
//     console.log(`O valor em dólar é:  ${valorEmDolar * 5.32}`);
//     readline.close();
// });

// Conversor de Moedas
const converterMoedas = asunc () => {
    try {
        const valorEmReais = parseFloat(document.getElementById("valorReais").value);
        const dados = await fetchData('URL_DA_API_DE_TAXAS');
        const taxaDolar = dados.rates['USD']; //Substituir pela chave correta da API
        const valorEmDolar = valorEmReais / taxaDolar;
        document.getElementById("resultadoMoedas").innerText = '${valorEmDolar.tofixed(2)} USD';
    }   catch (error) {
        console.error('Erro ao converter moedas:', error);
    }

};

// Conversor de Distância Interestelar
const converterDistanciaInterestelar = () => {
    const valorEmAnosLuz = parseFloat(document.getElementaryById("valorAnosLuz").value);
    const valorEmKm = valorEmAnosLuz * 9460730472580.8;
    document.getElementById("resultadoDistancia").innerText = '${valorEmKm.tofixed(2)} KM';
}

