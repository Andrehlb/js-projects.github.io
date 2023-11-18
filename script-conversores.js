// Utilitários para fazer requisições HTTP
const fetchData = async () => {
    const url = 'https://cdn.moeda.info/api/bcb.json'; // Ebdpoint da API do Banco Central do Brasil.
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
   // console.log(data); // depuração: logando os dados para ver o que estamos recebendo.
   // return data;
};

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
const converterMoedas = async () => {
    try {
        const valorEmReais = parseFloat(document.getElementById("valorReais").value); //P1 Captura valor em reais inserido (input) pelo usuário.
        const moedaSelecionada = document.getElementById("moedaSelecionada").value; // P2 Detecta qual moeda foi selecionada no dropdown.

        const dados = await fetchData(); // P3.1 Envia requisiçãqo para a API de conversão de moedas.        document.getElementById("apiSource").innerText = 'Source: https://www.moeda.info/';

        if (!dados.rates[moedaSelecionada]) { // P3.3 Verifica se a moeda selecionada está disponível na API.}
            throw new Error(`A taxa de câmbio para ${moedaSelecionada} não está disponível.`);
        }

       // document.getElementById("apiSource").innerText = 'Source: https://www.moeda.info/'; // P3.2 Atualiza a fonte da API no DOM.
        
        const taxaConversao = dados.rates[moedaSelecionada]; // P4.1 Calcula o valor convertido.
        const valorConvertido = valorEmReais * taxaConversao; // P4.2 Aqui, valor inserido em reais é multiplicado pela taxa de conversão.
        
        document.getElementById("resultadoMoedas").innerText = `${valorConvertido.toFixed(2)} ${moedaSelecionada}`; // P5 Atulaliza a página web com o valor convertido.
        document.getElementById("apiSource").innerText = 'Fonte: https://www.moeda.info/';
    }   catch (error) {
        console.error('Erro ao converter moedas:', error);
        document.getElementById("resultadoMoedas").innerText = 'Erro ma conversão.';
    }
}

// Adicionando Event Listeners para os botões de conversão de moedas.
document.addEventListener('DOMContentLoaded', () => {
    const botaoConverterMoedas = document.getElementById("botaoConverterMoedas");
    if (botaoConverterMoedas) {
        botaoConverterMoedas.addEventListener('click', converterMoedas);
    }
    // Aqui, adiciona os Events Listeners para outros botões de conversão.
});


// Conversor de Distância Interestelar
const converterDistanciaInterestelar = () => {
    const valorEmAnosLuz = parseFloat(document.getElementById("valorAnosLuz").value);
    const distanciaEmKm = valorEmAnosLuz * 9460730472580.8; // Um ano-luz é aproximanadamente 9,5 trilhões de km.
    document.getElementById("resultadoDistancia").innerText = `${distanciaEmKm.toExponential(2)} KM`;
};

// Adicionando Event Listeners para os botões de conversão de distância interestelar.
document.addEventListener('DOMContentLoaded', () => {
    const botaoConverterDistancia = document.getElementById("botaoConverterDistancia");
    if (botaoConverterDistancia) {
        botaoConverterDistancia.addEventListener('click', converterDistanciaInterestelar);
    }
});

// Conversosr de criptomoedas
const converterParaCripto = () => {
    const valorEmReais = parseFloat(document.getElementById("valorReaisCripto").value);
    const valorEmBitcoin = valorEmReais / 225000;
    document.getElementById("resultadoCripto").innerText = `${valorEmBitcoin.toFixed(2)} BTC`;
}

// Adicionando Event Listeners para os botões de conversão
//document.addEventListener('DOMContentLoaded', () => {
//    document.getElementById("botaoConverterMoedas").addEventListener('click', converterMoedas);
//    document.getElementById("botaoConverterDistancia").addEventListener('click', converterDistanciaInterestelar);
//    document.getElementById("botaoConverterCripto").addEventListener('click', converterParaCripto);
//});