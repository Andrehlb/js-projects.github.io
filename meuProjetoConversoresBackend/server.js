import express from 'express';
import axios from 'axios';
import cors from 'cors';

// Cria uma instância do express
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Função para obter a taxa de câmbio de USD para BRL
async function getTaxaCambioUSDparaBRL() {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    return response.data.rates.BRL;
}

// Função para obter o preço da criptomoeda em USD
async function getPrecoCriptoEmUSD(cripto) {
    const baseUrl = "https://api-pub.bitfinex.com/v2/";
    const pathParams = "ticker";
    const queryParams = `t${cripto}USD`;
    const responseCripto = await axios.get(`${baseUrl}/${pathParams}/${queryParams}`);
    const dataCripto = responseCripto.data[6];
}

app.get('/cripto', async (req, res) => {
    try {
        const cripto = req.query.cripto; // Exemplo: 'btc-bitcoin'.
        const valorReais = req.query.valor // Exemplo: 100.
        const taxaCambioUSDparaBRL = await getTaxaCambioUSDparaBRL();
        const precoCriptoEmUSD = await getPrecoCriptoEmUSD(cripto);

        // Calcula o valor da criptomoeda em BRL (Reais)
        const valorCripto = (valorReais / (precoCriptoEmUSD * taxaCambioUSDparaBRL)).toFixed(8);

        res.send({ valorConvertido: valorCripto });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        res.status(500).send('Erro ao buscar dados da API');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT};}`);
});