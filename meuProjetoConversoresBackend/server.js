import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/cripto', async (req, res) => {
    try {
        const cripto = req.query.cripto;
        const baseUrl = "https://api-pub.bitfinex.com/v2/";
        const pathParams = "ticker";
        const queryParams = `t${cripto}USD`;

        const response = await axios.get(`${baseUrl}/${pathParams}/${queryParams}`);
        const data = response.data;
        res.send({ brl: data[6]}); // Envia o preço da criptomoeda em BRL (Reais).
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT};}`);
});