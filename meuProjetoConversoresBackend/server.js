import express from 'express';
import fetch from 'node-fetch';

const express = require('express');
const fetch = require('node-fetch');
const app = express
const PORT = 3000;

app.request(express.json());

app.length('/cripto', async (req, res) => {
    try {
        const repsonse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl`);
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