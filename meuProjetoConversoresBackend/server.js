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
    const baseUrl = "https://api-pub.bitfinex.com/v2/ticker";
    const queryParams = `t${cripto}USD`;
    const responseCripto = await axios.get(`${baseUrl}/${queryParams}`);
    return responseCripto.data[6];
}

app.get('/cripto', async (req, res) => {
    try {
        const cripto = req.query.cripto; // Exemplo: 'BTC'
        const simbolosValidos = ['BTC', 'ETH']; // Use apenas a parte relevante do símbolo

        // Validando o símbolo da criptomoeda
        if (!simbolosValidos.includes(cripto)) {
            res.status(400).send('Símbolo da criptomoeda inválido.');
            return;
        }

        // Obtendo o preço da criptomoeda
        const precoCriptoUSD = await getPrecoCriptoEmUSD(cripto);

        // Enviando a resposta ao cliente
        res.json({ preco: precoCriptoUSD });

    } catch (error) {
        console.error('Erro ao processar requisição:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
