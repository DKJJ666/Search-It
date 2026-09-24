import axios from 'axios';

export const viaCEPAPI = axios.create({
    baseURL: `https://viacep.com.br/ws`,
    timeout: 5000, // Aborting the request if it takes longer than 5 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

export const recibosAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 5000, // Aborting the request if it takes longer than 5 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});
