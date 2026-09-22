import app from './src/app.js' // Importa a aplicação já configurada

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`🚀 Servidor a correr na porta ${PORTA} - http://localhost:${PORTA}`);
});