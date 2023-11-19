import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.get('/cripto', async (req, res) => {
    try {
        const cripto = req.query.cripto;
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cripto}&vs_currencies=brl`);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        res.status(500).send('Erro ao buscar dados da API');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT};}`);
});