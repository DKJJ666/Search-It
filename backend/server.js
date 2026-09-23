import app from './src/app.js' // Importa a aplicação já configurada

import dotenv from 'dotenv';
dotenv.config();

// Heath check
app.get('/', (req, res) => {
    res.json({
        message: 'Search It API is running'
        
    })
    
})


// app.get('/cep/:cep', async (req, res) => {
    
//     const cep = req.params.cep;


//     try {

//         const response = await fetch (
//             `https://viacep.com.br/ws/${cep}/json/`


//         );

//         const data = await response.json();

//         res.json(data);

//     } catch(error){

//         console.error(error);

//         res.status(500).json({
//             error: "Error when consulting via CEP"
//         });

//     }

// })



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor a correr na porta ${PORT} - http://localhost:${PORT}`);
    
});
