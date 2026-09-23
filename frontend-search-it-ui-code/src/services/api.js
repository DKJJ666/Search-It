import axios from 'axios';

export const viaCEPAPI = axios.create({
    baseURL: `https://viacep.com.br/ws`

});

