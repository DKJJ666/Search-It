import axios from 'axios';

export const viaCEPAPI = axios.create({
    baseURL: `https://viacep.com.br/ws`

});

export const recibosAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
