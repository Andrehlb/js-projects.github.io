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

        const response = await axios.get(`${baseUrl}/${pathParams}/${queryParams}`)
        
        if (!response.ok) {
            throw new Error(`Erro na API! status: ${response.status}`);
        }
       
        const data = await response.json();
        res.send({brl: data.quotes.BRL.price }); // Envia o preço da criptomoeda em BRL (Reais).

    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        res.status(500).send('Erro ao buscar dados na API');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT};}`);
});